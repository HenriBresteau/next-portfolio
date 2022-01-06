<?php

use projet4\Autoloader;
use Projet4\CommentManager;
use Projet4\MembreManager;
use Projet4\PostManager;
use Projet4\ReportManager;

require_once 'Autoloader.php';
Autoloader::register();


function listPost()
{
        $postManager = new PostManager();
        $posts = $postManager->getPosts();

        require('./Views/frontend/homeView.php');
}
function post()
{
        $postManager = new PostManager();
        $commentManager = new CommentManager();

        $post = $postManager->getPost($_GET['id']);
        $comments = $commentManager->getComments($_GET['id']);
        require('./Views/frontend/postView.php');
}
function addComment($postId, $author, $comment)
{
        $commentManager = new CommentManager();
        $affectedLines = $commentManager->postComment($postId, $author, $comment);
        if ($affectedLines === false) {
                throw new Exception("Impossible d'ajouter le commentaire !");
        } else {
                header('Location: index.php?action=post&id=' . $postId . '#comments');
        }
}

function addMember($pseudo, $pass, $email)
{
        $memberManager = new MembreManager();

        $pseudoValid = $memberManager->checkPseudo($pseudo);
        $emailValid = $memberManager->checkPseudo($email);

        if ($pseudoValid) {
                //si pseudo invalide renvoyé un erreur
                header('Location: index.php?action=subscribe&error=invalidUsername');
        }
        if ($emailValid) {
                //si email invalide renvoyé un erreur
                header('Location: index.php?action=subscribe&error=invalidMail');
        }

        if (!$pseudoValid && !$emailValid) {
                // Hachage du mot de passe
                $pass_hache = password_hash($pass, PASSWORD_DEFAULT);

                $newMember = $memberManager->addMember($pseudo, $pass_hache, $email);

                // redirige vers page d'accueil avec le nouveau paramètre
                header('Location: index.php?account-status=account-successfully-created');
        }
}

function loginSubmit($pseudo, $pass)
{
        $memberManager = new MembreManager();
        $member = $memberManager->loginMember($pseudo);
        $isPasswordCorrect = password_verify($_POST['pass'], $member['pass']);

        if (!$member) {
                header('Location: index.php?action=login&account-status=unsuccess-login');
        } else {
                if ($isPasswordCorrect) {
                        $_SESSION['id'] = $member['id'];
                        $_SESSION['pseudo'] = ucfirst(strtolower($pseudo));
                        $_SESSION['admin'] = $member['admin'];
                        header('Location: index.php');
                } else {
                        header('Location: index.php?action=login&account-status=unsuccess-login');
                }
        }
}
function postReport($postId, $commentId, $memberId)
{
        $reportManager = new ReportManager();
        $reported = $reportManager->postReports($commentId, $memberId);
        header('Location: index.php?action=post&id=' . $postId . '&report=success#commentsFrame');
}

function logout()
{
        $_SESSION = array();
        setcookie(session_name(), '', time() - 42000);
        session_destroy();
        header('Location: index.php?logout=success');
}
function displayLogin()
{
        require('./Views/frontend/loginView.php');
}
function displaySubscribe()
{
        require('./Views/frontend/subscribeView.php');
}
function displayAbout()
{
        require('./Views/frontend/aboutView.php');
}
