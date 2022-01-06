<?php

namespace Projet4;

require_once('./Model/DbManager.php');

class PostManager
{
    public function getPosts()
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->query("SELECT `id`,`auteur`,`titre`,`contenu`, DATE_FORMAT(dateAjout, 'le %d/%m/%Y à %H:%i:%s') AS date_fr , DATE_FORMAT(`dateModif`, 'le %d/%m/%Y à %H:%i:%s') AS modif_date_fr FROM `posts` ORDER BY dateAjout");
        $dbManager->disconnect();
        return $req;
    }

    public function getPost($postId)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->prepare("SELECT `id`,`auteur`,`titre`,`contenu`, DATE_FORMAT(dateAjout, 'le %d/%m/%Y à %H:%i:%s') AS date_fr , DATE_FORMAT(`dateModif`, 'le %d/%m/%Y à %H:%i:%s') AS modif_date_fr FROM `posts` WHERE id = ?");
        $req->execute(array($postId));
        $post = $req->fetch();
        $dbManager->disconnect();
        return $post;
    }

    public function updatePost($title, $content, $postId)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->prepare('UPDATE posts SET titre = ?, contenu = ?, dateModif = NOW() WHERE id = ?');
        $updated = $req->execute(array($title, $content, $postId));
        return $updated;
    }

    public function createPost($title, $content)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->prepare('INSERT INTO  posts(`titre`,`contenu`, `dateAjout`, `dateModif`) VALUES (?, ?, NOW(), NOW())');
        $newPost = $req->execute(array($title, $content));
        return $newPost;
    }

    public function deletePost($postId)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->prepare('DELETE FROM posts WHERE id = ?');
        $deletedPost = $req->execute(array($postId));
        return $deletedPost;
    }
}
