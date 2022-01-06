<?php

use projet4\Autoloader;
use Projet4\CommentManager;
use Projet4\MembreManager;
use Projet4\PostManager;
use Projet4\ReportManager;

require_once 'Autoloader.php';
Autoloader::register();


function displayAdmin()
{
    $postManager = new PostManager();
    $reportManager = new ReportManager();
    $memberManager = new MembreManager();

    $posts = $postManager->getPosts();

    $reports = $reportManager->getReports();
    $members = $memberManager->getMembers();
    require('Views/backend/adminView.php');
}
function displayCreatePost()
{
    require('Views/backend/createPostView.php');
}
function newPost($title, $content)
{
    $postManager = new PostManager();

    $newPost = $postManager->createPost($title, $content);
    Header('Location: index.php?action=admin&new-post=success');
}
function displayUpdate()
{
    $postManager = new PostManager();
    $post = $postManager->getPost($_GET['id']);
    require('Views/backend/updatePostView.php');
}
function submitUpdate($title, $content, $postId)
{
    $postManager = new PostManager();

    $updated = $postManager->updatePost($title, $content, $postId);
    Header('Location: index.php?action=admin&update-status=success');
}
function removePost($postId) {
	$postManager = new PostManager();
	$deletedPost = $postManager->deletePost($postId);
	Header('Location: index.php?action=admin&remove-post=success');
}
function removeComment($commentId) {
	$commentManager = new CommentManager();
	$deletedComment = $commentManager->deleteComment($commentId);
	Header('Location: index.php?action=admin&remove-comment=success');
}