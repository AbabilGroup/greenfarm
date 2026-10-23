import { useState } from "react";
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/lib/site";

interface ContactValues {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string; // honeypot
}

interface ContactResponse {
  ok?: boolean;
  error?: string;
}

const initialValues: ContactValues = { name: "", email: "", company: "", message: "", website: "" };

// Limits match the server-side checks in public/contact.php
const schema = Yup.object({
  name: Yup.string().trim().min(2, "Please enter your name.").max(100, "Name is too long.").required("Please enter your name."),
  email: Yup.string().trim().email("Please enter a valid email address.").max(150, "Email is too long.").required("Please enter your email."),
  company: Yup.string().trim().max(150, "Company name is too long."),
  message: Yup.string().trim().min(10, "Please write at least 10 characters.").max(5000, "Message is too long.").required("Please write a message."),
});

const fieldBase =
  "w-full rounded-2xl border bg-white px-5 py-4 text-ink placeholder:text-ink/40 transition focus:outline-none focus:ring-4";
const fieldOk = "border-forest-900/10 focus:border-leaf-400 focus:ring-leaf-400/20";
const fieldErr = "border-red-400 focus:border-red-400 focus:ring-red-400/20";

function FieldError({ name }: { name: keyof ContactValues }) {
  return <ErrorMessage name={name} render={(msg) => <p id={`${name}-error`} className="mt-1.5 px-2 text-sm text-red-600">{msg}</p>} />;
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(values: ContactValues, { resetForm, setStatus }: FormikHelpers<ContactValues>) {
    setStatus(undefined);
    try {
      const body = new FormData();
      Object.entries(values).forEach(([key, value]) => body.append(key, value.trim()));
      // contact.php lives in public/ and is served by Hostinger's PHP; it emails site.email
      const res = await fetch("/contact.php", { method: "POST", body });
      const data: ContactResponse = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      resetForm();
      setSent(true);
    } catch {
      setStatus("error");
    }
  }

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
        <CheckCircle2 className="size-14 text-leaf-500" aria-hidden="true" />
        <h2 className="mt-5 text-3xl font-medium text-forest-900">Thank you!</h2>
        <p className="mt-2 max-w-sm text-ink/65">Your message has been sent. We&apos;ll be in touch soon.</p>
        <button type="button" onClick={() => setSent(false)} className="btn-dark mt-8">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      {({ errors, touched, isSubmitting, status }) => {
        const cls = (name: keyof ContactValues) => `${fieldBase} ${touched[name] && errors[name] ? fieldErr : fieldOk}`;
        const aria = (name: keyof ContactValues) =>
          touched[name] && errors[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {};

        return (
          <Form className="space-y-4" noValidate>
            <h2 className="text-3xl font-medium text-forest-900">Send us a message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">Your name</label>
                <Field id="name" name="name" autoComplete="name" placeholder="Your name *" className={cls("name")} {...aria("name")} />
                <FieldError name="name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <Field id="email" name="email" type="email" autoComplete="email" placeholder="Email address *" className={cls("email")} {...aria("email")} />
                <FieldError name="email" />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="sr-only">Farm or company</label>
              <Field id="company" name="company" autoComplete="organization" placeholder="Farm / company (optional)" className={cls("company")} {...aria("company")} />
              <FieldError name="company" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <Field as="textarea" id="message" name="message" rows={6} placeholder="How can we help? *" className={`${cls("message")} resize-none`} {...aria("message")} />
              <FieldError name="message" />
            </div>
            {/* Honeypot: bots fill it, humans never see it */}
            <Field type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            {status === "error" && (
              <p className="rounded-2xl bg-red-50 px-5 py-3 text-sm text-red-700" role="alert">
                Sorry, something went wrong. Please email us directly at{" "}
                <a href={`mailto:${site.email}`} className="font-semibold underline">
                  {site.email}
                </a>
                .
              </p>
            )}

            <button type="submit" disabled={isSubmitting} className="btn-primary w-full !py-4 disabled:opacity-60">
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
                </>
              ) : (
                <>
                  Submit <ArrowUpRight className="size-4" aria-hidden="true" />
                </>
              )}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
