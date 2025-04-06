<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$slug = $_GET['slug'];

$servername = "localhost";
$username = "u519573295_brk";
$password = "Summer@21!";
$dbname = "u519573295_brk";

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
