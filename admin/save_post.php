<?php
require_once __DIR__ . '/auth_check.php';

header("Access-Control-Allow-Origin: https://bharathkreddy.com");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../db.php';

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);
if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON"]);
    exit;
}

// ── Delete ──
if (isset($data["action"]) && $data["action"] === "delete") {
    if (!isset($data["slug"]) || trim($data["slug"]) === '') {
        http_response_code(400);
        echo json_encode(["error" => "Slug required for deletion"]);
        exit;
    }
    try {
        $stmt = $pdo->prepare("DELETE FROM blog_posts WHERE slug = :slug");
        $stmt->execute(['slug' => trim($data["slug"])]);
        echo json_encode(["ok" => true]);
    } catch (PDOException $e) {
        error_log('save_post delete failed: ' . $e->getMessage());
        http_response_code(500);
        echo json_encode(["error" => "Failed to delete post"]);
    }
    exit;
}

// ── Validate required fields ──
$name       = trim($data["name"] ?? "");
$slug       = trim($data["slug"] ?? "");
$category   = trim($data["category"] ?? "");
$summary    = trim($data["summary"] ?? "");
$main_image = trim($data["main_image"] ?? "");
$content    = $data["content"] ?? "";
$published  = intval($data["published"] ?? 0);
$editing_slug = isset($data["editing_slug"]) ? trim($data["editing_slug"]) : null;

if ($name === '' || $slug === '') {
    http_response_code(400);
    echo json_encode(["error" => "Name and slug are required"]);
    exit;
}

if (mb_strlen($name) > 255 || mb_strlen($slug) > 255 || mb_strlen($category) > 100 || mb_strlen($summary) > 1000 || mb_strlen($main_image) > 500) {
    http_response_code(400);
    echo json_encode(["error" => "One or more fields exceed maximum length"]);
    exit;
}

try {
    if ($editing_slug) {
        $sql = "UPDATE blog_posts SET
            name = :name,
            slug = :slug,
            category = :category,
            summary = :summary,
            main_image = :main_image,
            content = :content,
            published = :published"
            . ($published ? ", published_on = NOW()" : "") .
            " WHERE slug = :editing_slug";
        $stmt = $pdo->prepare($sql);
        $params = [
            'name' => $name,
            'slug' => $slug,
            'category' => $category,
            'summary' => $summary,
            'main_image' => $main_image,
            'content' => $content,
            'published' => $published,
            'editing_slug' => $editing_slug,
        ];
    } else {
        $sql = "INSERT INTO blog_posts
            (name, slug, category, summary, main_image, content, published, published_on)
            VALUES
            (:name, :slug, :category, :summary, :main_image, :content, :published, " . ($published ? "NOW()" : "NULL") . ")";
        $stmt = $pdo->prepare($sql);
        $params = [
            'name' => $name,
            'slug' => $slug,
            'category' => $category,
            'summary' => $summary,
            'main_image' => $main_image,
            'content' => $content,
            'published' => $published,
        ];
    }

    $stmt->execute($params);
    echo json_encode(["ok" => true, "slug" => $slug]);
} catch (PDOException $e) {
    error_log('save_post upsert failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(["error" => "Failed to save post"]);
}
