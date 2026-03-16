<?php
header("Access-Control-Allow-Origin: https://bharathkreddy.com");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/db.php';

try {
    $stmt = $pdo->query("SELECT name, slug, category, summary, main_image, published_on FROM blog_posts ORDER BY published_on DESC");
    echo json_encode($stmt->fetchAll());
} catch (PDOException $e) {
    error_log('get_blog_posts query failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch posts']);
}
