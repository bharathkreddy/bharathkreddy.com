<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

// Load .env from project root
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$servername = $_ENV['DB_SERVERNAME'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$dbname = $_ENV['DB_NAME'];


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT name, slug, category, summary, main_image, published_on FROM blog_posts ORDER BY published_on DESC";
$result = $conn->query($sql);

if (!$result) {
  die(json_encode(["error" => "Query failed: " . $conn->error]));
}

$posts = [];
while ($row = $result->fetch_assoc()) {
  $posts[] = $row;
}

echo json_encode($posts);

$conn->close();
?>

