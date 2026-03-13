<?php
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body']);
    exit;
}

$name    = isset($input['name'])    ? trim(strip_tags($input['name']))    : '';
$email   = isset($input['email'])   ? trim(strip_tags($input['email']))   : '';
$phone   = isset($input['phone'])   ? trim(strip_tags($input['phone']))   : '';
$service = isset($input['service']) ? trim(strip_tags($input['service'])) : '';
$message = isset($input['message']) ? trim(strip_tags($input['message'])) : '';

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name, email, and message are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address']);
    exit;
}

$to = 'info@altimidiagnosticlab.com';
$from_email = 'info@altimidiagnosticlab.com';
$subject = 'New Enquiry from ' . $name . ' — Altimi Lab Website';

$body = '
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { font-family: Arial, sans-serif; background: #f4f7fa; margin: 0; padding: 20px; }
  .container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
  .header { background: linear-gradient(135deg, #0b71ba, #095a94); padding: 24px 28px; }
  .header h1 { color: #ffffff; font-size: 18px; margin: 0; }
  .header p { color: rgba(255,255,255,0.8); font-size: 13px; margin: 6px 0 0; }
  .body { padding: 24px 28px; }
  .row { margin-bottom: 16px; }
  .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #8899a6; font-weight: 600; margin-bottom: 4px; }
  .value { font-size: 15px; color: #1a2b3c; line-height: 1.5; }
  .message-box { background: #f8fafb; border-left: 3px solid #0b71ba; padding: 14px 16px; border-radius: 0 8px 8px 0; margin-top: 4px; }
  .footer { padding: 16px 28px; background: #f8fafb; text-align: center; font-size: 12px; color: #8899a6; }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>New Website Enquiry</h1>
    <p>Submitted via altimidiagnosticlab.com contact form</p>
  </div>
  <div class="body">
    <div class="row">
      <div class="label">Full Name</div>
      <div class="value">' . htmlspecialchars($name) . '</div>
    </div>
    <div class="row">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a></div>
    </div>
    <div class="row">
      <div class="label">Phone</div>
      <div class="value">' . ($phone ? htmlspecialchars($phone) : '<span style="color:#aaa">Not provided</span>') . '</div>
    </div>
    <div class="row">
      <div class="label">Service Needed</div>
      <div class="value">' . ($service ? htmlspecialchars($service) : '<span style="color:#aaa">Not specified</span>') . '</div>
    </div>
    <div class="row">
      <div class="label">Message</div>
      <div class="message-box">' . nl2br(htmlspecialchars($message)) . '</div>
    </div>
  </div>
  <div class="footer">
    Altimi Research &amp; Diagnostic Laboratory &bull; DHA Phase-7 Ext, Karachi
  </div>
</div>
</body>
</html>';

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Altimi Lab Website <" . $from_email . ">\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// GoDaddy requires the -f flag for the envelope sender
$params = '-f' . $from_email;

$sent = @mail($to, $subject, $body, $headers, $params);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully. We will get back to you shortly!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send your message. Please try calling us or sending a WhatsApp.']);
}
