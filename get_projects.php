<?php
// Set headers to allow cross-origin and JSON output
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Database connection parameters
$host = 'localhost';        // replace with your DB host
$dbname = 'u519573295_brk';  // replace with your DB name
$user = 'u519573295_brk';    // replace with your DB username
$password = 'Summer@21!';// replace with your DB password

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
