<?php
// Contact form handler for Hostinger (PHP). Receives POST from /contact/ and emails the team.
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$TO   = 'info@greanfarm.eu';
// Must be an address on your own domain, otherwise Hostinger / receiving servers may reject it
$FROM = 'no-reply@greanfarm.eu';

function respond($code, $payload) {
    http_response_code($code);
    echo json_encode($payload);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

// Honeypot: silently accept bot submissions without sending
if (!empty($_POST['website'])) {
    respond(200, ['ok' => true]);
}

// Strip CR/LF to block header injection, trim and cap length
function clean($value, $max) {
    $value = trim(str_replace(["\r", "\n", "%0a", "%0d"], ' ', (string) $value));
    return mb_substr($value, 0, $max);
}

$name    = clean($_POST['name'] ?? '', 100);
$email   = clean($_POST['email'] ?? '', 150);
$company = clean($_POST['company'] ?? '', 150);
$message = mb_substr(trim((string) ($_POST['message'] ?? '')), 0, 5000);

// Same rules as the Formik/Yup schema in components/ContactForm.tsx
if (mb_strlen($name) < 2 || mb_strlen($message) < 10 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please fill in all required fields.']);
}

$subject = '=?UTF-8?B?' . base64_encode("New enquiry from $name — greanfarm.eu") . '?=';
$body  = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Farm / company: " . ($company !== '' ? $company : '-') . "\n\n";
$body .= "Message:\n$message\n\n";
$body .= "---\nSent from the contact form on greanfarm.eu at " . gmdate('Y-m-d H:i') . " UTC\n";

$headers  = "From: Grean Website <$FROM>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// -f sets the envelope sender to our own domain, which keeps Hostinger mail out of spam
if (@mail($TO, $subject, $body, $headers, '-f' . $FROM)) {
    respond(200, ['ok' => true]);
}
respond(500, ['ok' => false, 'error' => 'Mail could not be sent.']);
