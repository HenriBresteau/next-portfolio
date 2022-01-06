<?php

require('Controller/Frontend.php');
require('Controller/Backend.php');
session_start();

try {
    if (isset($_GET['action'])) {
        if ($_GET['action'] == 'listPosts') {
            listPost();
        } elseif ($_GET['action'] == 'post') {
            if (isset($_GET['id']) && $_GET['id'] > 0) {
                post();
            } else {
                throw new Exception('Aucun identifiant de billet envoyé');
            }
        } elseif ($_GET['action'] == 'addComment') {
            if (isset($_GET['id']) && $_GET['id'] > 0) {
                if (!empty($_SESSION['pseudo']) && !empty($_POST['comment'])) {
                    addComment($_GET['id'], $_SESSION['pseudo'], $_POST['comment']);
                } else {
                    throw new Exception('Tous les champs ne sont pas remplis !');
                }
            } else {
                throw new Exception('Aucun identifiant de billet envoyé');
            }
        } elseif ($_GET['action'] == 'addMember') {
            if (!empty($_POST['pseudo']) && !empty($_POST['pass']) && !empty($_POST['pass_confirm']) && !empty($_POST['mail'])) {
                if ($_POST['pass'] === $_POST['pass_confirm']) {
                    addMember(strip_tags($_POST['pseudo']), strip_tags($_POST['pass']), strip_tags($_POST['mail']));
                } else {
                    throw new Exception('Les mots de passe ne sont pas identiques.');
                }
            }
        } elseif ($_GET['action'] == 'loginSubmit') {
            loginSubmit(strip_tags($_POST['pseudo']), strip_tags($_POST['pass']));
        } elseif ($_GET['action'] == 'login') {
            displayLogin();
        } elseif ($_GET['action'] == 'subscribe') {
            displaySubscribe();
        } elseif ($_GET['action'] == 'logout' || $_GET['action'] == 'logout=success') {
            logout();
        } elseif ($_GET['action'] == 'about') {
            displayAbout();
        } elseif ($_GET['action'] == 'report') {
            postReport($_GET['id'], $_GET['comment-id'], $_SESSION['id']);
        } elseif ($_GET['action'] == 'admin') {
            if (isset($_SESSION) && $_SESSION['admin'] == '1') {
                displayAdmin();
            } else {
                throw new Exception('Administrateur non identifié ');
            }
        } elseif ($_GET['action'] == 'createPost') {
            if (isset($_SESSION) && $_SESSION['admin'] == '1') {
                displayCreatePost();
            } else {
                throw new Exception('Administrateur non identifié');
            }
        } elseif ($_GET['action'] == 'submitPost') {
            if (!empty($_POST['title']) && !empty($_POST['content'])) {
                newPost($_POST['title'], $_POST['content']);
            } else {
                throw new Exception('Contenu vide !');
            }
        } elseif ($_GET['action'] == 'updatePost') {
            if (isset($_GET['id']) && $_GET['id'] > 0) {
                if (isset($_SESSION) && $_SESSION['admin'] == '1') {
                    displayUpdate();
                }
            } else {
                throw new Exception('Administrateur non identifié');
            }
        } elseif ($_GET['action'] == 'submitUpdate') {
            submitUpdate($_POST['title'], $_POST['content'], $_GET['id']);
        } elseif ($_GET['action'] == 'deletePost') {
            removePost($_GET['id']);
        } elseif ($_GET['action'] == 'deleteComment') {
            removeComment($_GET['id']);
        }
    } else {
        listPost();
    }
} catch (Exception $e) {
    header('Refresh: 5;url=index.php');
    echo '<p style="text-align:center">Erreur : <strong>' . $e->getMessage();
    echo '</strong></p>';
    echo '<p style="text-align:center">Retour à <a href="index.php"> accueil </a> dans <strong> 5 secondes</strong></p>'  ;
}
