<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$slug = $_GET['slug'];

require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

// Load .env from project root
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$servername = $_ENV['DB_SERVERNAME'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$dbname = $_ENV['DB_NAME'];

$mysqli = new mysqli($servername, $username, $password, $dbname);

if ($mysqli->connect_error) {
    echo json_encode(['error' => 'Database connection error']);
    exit;
}

$stmt = $mysqli->prepare("SELECT * FROM projects WHERE slug = ?");
$stmt->bind_param("s", $slug);
$stmt->execute();
$result = $stmt->get_result();

if ($project = $result->fetch_assoc()) {
    echo json_encode($project);
} else {
    echo json_encode(['error' => 'Project not found']);
}

$stmt->close();
$mysqli->close();
?>
