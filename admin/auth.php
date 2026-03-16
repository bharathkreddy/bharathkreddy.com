<?php
session_start();
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/../db.php';

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data || !isset($data['password'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Password required']);
    exit;
}

$hash = $_ENV['ADMIN_PASSWORD_HASH'] ?? '';
if ($hash && password_verify($data['password'], $hash)) {
    $_SESSION['authenticated'] = true;
    echo json_encode(['ok' => true]);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Incorrect password']);
}
