<?php

namespace Projet4;

require_once('./Model/DbManager.php');

class CommentManager
{
    public function getComments($postId)
    {   //affiche un commentaire en fonction de l'ID du post
        $dbManager = DbManager::getInstance();

        $bdd = $dbManager->connect();
        $req = $bdd->prepare("SELECT `id`,`id_post`,`auteur`,`contenu`, DATE_FORMAT(date, 'le %d/%m/%Y à %H:%i:%s') AS date_fr 
        FROM `comments` WHERE id_post = ? ORDER BY date DESC");

        $req->execute(array($postId));


        $dbManager->disconnect();
        return $req;
    }


    public function postComment($postId, $autor, $comment)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $comments = $bdd->prepare("INSERT INTO `comments`(`id_post`, `auteur`, `contenu`, `date`) VALUES (?,?,?, NOW())");
        $comments->execute(array($postId, $autor, $comment));
        return $comments;
    }
    public function deleteComment($commentId) {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->prepare('DELETE FROM comments WHERE id = ?');
        $deletedComment = $req->execute(array($commentId));
        return $deletedComment;
    }
}
