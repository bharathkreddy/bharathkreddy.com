<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$slug = $_GET['slug'];


// require_once __DIR__ . '/vendor/autoload.php';

// use Dotenv\Dotenv;

// // Load .env from project root
// $dotenv = Dotenv::createImmutable(__DIR__);
// $dotenv->load();

// $servername = $_ENV['DB_SERVERNAME'];
// $username = $_ENV['DB_USERNAME'];
// $password = $_ENV['DB_PASSWORD'];
// $dbname = $_ENV['DB_NAME'];

$servername = "localhost";
$username = "u519573295_brk";
$password = "Summer@21!";
$dbname = "u519573295_brk";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
  die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$stmt = $conn->prepare("SELECT * FROM blog_posts WHERE slug=?");
$stmt->bind_param("s", $slug);
$stmt->execute();
$result = $stmt->get_result();

if ($post = $result->fetch_assoc()) {
    echo json_encode($post);
} else {
    echo json_encode(["error" => "Post not found"]);
}

$conn->close();
?>

