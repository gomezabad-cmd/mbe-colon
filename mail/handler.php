<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: /");
  exit;
}

$nombre = isset($_POST["nombre"]) ? strip_tags(trim($_POST["nombre"])) : "";
$email = isset($_POST["email"]) ? filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL) : "";
$empresa = isset($_POST["empresa"]) ? strip_tags(trim($_POST["empresa"])) : "";
$servicio = isset($_POST["servicio"]) ? strip_tags(trim($_POST["servicio"])) : "";
$mensaje = isset($_POST["mensaje"]) ? strip_tags(trim($_POST["mensaje"])) : "";

if (!$nombre || !$email || !$mensaje) {
  header("Location: /index.html?error=incomplete");
  exit;
}

$to = "j.aimpressions@gmail.com";
$subject = "Nuevo contacto de $nombre — JAimpression";
$body = "Nombre: $nombre\n";
$body .= "Email: $email\n";
if ($empresa) $body .= "Empresa: $empresa\n";
if ($servicio) $body .= "Servicio: $servicio\n";
$body .= "Mensaje:\n$mensaje\n";

$headers = "From: no-reply@jaimpression.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
  header("Location: /gracias.html");
} else {
  header("Location: /index.html?error=mail");
}
exit;
