<?php
header("Access-Control-Allow-Origin: https://bharathkreddy.com");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/db.php';

if (!isset($_GET['slug']) || trim($_GET['slug']) === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Slug parameter is required']);
    exit;
}

$slug = trim($_GET['slug']);

try {
    $stmt = $pdo->prepare("SELECT * FROM blog_posts WHERE slug = :slug");
    $stmt->execute(['slug' => $slug]);
    $post = $stmt->fetch();

    if ($post) {
        echo json_encode($post);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Post not found']);
    }
} catch (PDOException $e) {
    error_log('get_single_post query failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch post']);
}
