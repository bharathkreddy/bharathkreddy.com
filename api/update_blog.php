<?php
// api/update_blog.php

// Include Composer's autoloader (go up one level to vendor/)
use Dotenv\Dotenv;

// Load .env from project root (one directory up)
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();


header("Content-Type: application/json");

// Simple security check

$api_key = $_ENV['DB_SERVERNAME'];
if ($_POST['api_key'] !== $api_key) {
    die(json_encode(['error' => 'Unauthorized']));
}

// Database connection

$servername = "localhost";
$username = "u519573295_brk";
$password = "Summer@21!";
$dbname = "u519573295_brk";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['error' => 'Database connection failed']));
}

// Extract posted data
$name = $conn->real_escape_string($_POST['name']);
$slug = $conn->real_escape_string($_POST['slug']);
$category = $conn->real_escape_string($_POST['category']);
$summary = $conn->real_escape_string($_POST['summary']);
$post_body = $conn->real_escape_string($_POST['post_body']);
$main_image = $conn->real_escape_string($_POST['main_image']);
$thumbnail_image = $conn->real_escape_string($_POST['thumbnail_image']);
$published_on = $conn->real_escape_string($_POST['published_on']);

// Check if the blog post already exists
$exists = $conn->query("SELECT id FROM blog_posts WHERE slug='$slug'");
if ($exists->num_rows > 0) {
    // Update existing blog
    $stmt = $conn->prepare("UPDATE blog_posts SET name=?, category=?, summary=?, post_body=?, main_image=?, thumbnail_image=?, published_on=? WHERE slug=?");
    $stmt->bind_param("ssssssss", $name, $category, $summary, $post_body, $main_image, $thumbnail_image, $published_on, $slug);
} else {
    // Insert new blog
    $stmt = $conn->prepare("INSERT INTO blog_posts (name, slug, category, summary, post_body, main_image, thumbnail_image, published_on) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $name, $slug, $category, $summary, $post_body, $main_image, $thumbnail_image, $published_on);
}

if ($stmt->execute()) {
    echo json_encode(["success" => true, "slug" => $slug]);
} else {
    echo json_encode(["error" => $stmt->error]);
}

$stmt->close();
$conn->close();
