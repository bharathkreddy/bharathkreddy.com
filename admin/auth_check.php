<?php
session_start();

if (empty($_SESSION['authenticated'])) {
    http_response_code(401);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}
