<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username   = "u519573295_brk";
$password   = "Summer@21!";
$dbname     = "u519573295_brk";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$raw  = file_get_contents("php://input");
$data = json_decode($raw, true);
if (!$data) {
    die(json_encode(["error" => "Invalid JSON"]));
}

// ── Delete ──
if (isset($data["action"]) && $data["action"] === "delete") {
    $slug = $conn->real_escape_string($data["slug"]);
    $conn->query("DELETE FROM blog_posts WHERE slug='$slug'");
    echo json_encode(["ok" => true]);
    $conn->close();
    exit;
}

// ── Upsert (insert or update) ──
$name        = $conn->real_escape_string($data["name"]       ?? "");
$slug        = $conn->real_escape_string($data["slug"]       ?? "");
$category    = $conn->real_escape_string($data["category"]   ?? "");
$summary     = $conn->real_escape_string($data["summary"]    ?? "");
$main_image  = $conn->real_escape_string($data["main_image"] ?? "");
$content     = $conn->real_escape_string($data["content"]    ?? "");
$published   = intval($data["published"] ?? 0);
$editing_slug = isset($data["editing_slug"]) ? $conn->real_escape_string($data["editing_slug"]) : null;

if (!$name || !$slug) {
    die(json_encode(["error" => "Name and slug are required"]));
}

if ($editing_slug) {
    // Update existing post
    $now = $published ? ", published_on=NOW()" : "";
    $sql = "UPDATE blog_posts SET
        name='$name',
        slug='$slug',
        category='$category',
        summary='$summary',
        main_image='$main_image',
        content='$content',
        published=$published
        $now
        WHERE slug='$editing_slug'";
} else {
    // Insert new post
    $published_on = $published ? "NOW()" : "NULL";
    $sql = "INSERT INTO blog_posts
        (name, slug, category, summary, main_image, content, published, published_on)
        VALUES
        ('$name','$slug','$category','$summary','$main_image','$content',$published,$published_on)";
}

if ($conn->query($sql)) {
    echo json_encode(["ok" => true, "slug" => $slug]);
} else {
    echo json_encode(["error" => $conn->error]);
}

$conn->close();
?>
