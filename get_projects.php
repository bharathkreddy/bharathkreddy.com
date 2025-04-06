<?php
// Set headers to allow cross-origin and JSON output
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

// Load .env from project root
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Database connection parameters
$host = $_ENV['DB_SERVERNAME'];;        // replace with your DB host
$dbname = $_ENV['DB_NAME'];  // replace with your DB name
$user = $_ENV['DB_USERNAME'];  // replace with your DB username
$password = $_ENV['DB_PASSWORD'];;// replace with your DB password



// Connect to the database using PDO
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit;
}

// Fetch projects from the database
try {
    $stmt = $pdo->prepare("SELECT id, name, slug, thumb_project_image FROM projects ORDER BY published_on DESC");
    $stmt->execute();

    $projects = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Output JSON
    echo json_encode($projects);
} catch (PDOException $e) {
    echo json_encode(["error" => "Database query failed: " . $e->getMessage()]);
}
