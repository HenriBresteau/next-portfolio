<?php

namespace Projet4;

require_once('./Model/DbManager.php');

class MembreManager
{
    public function checkPseudo($pseudo)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->prepare('SELECT pseudo FROM members WHERE pseudo = ?');
        $req->execute(array($pseudo));
        $pseudoValid = $req->fetch();
        return $pseudoValid;
    }

    public function checkPass($pass)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->prepare('SELECT pass FROM members WHERE pseudo = ?');
        $req->execute(array($pass));
        $passValid = $req->fetch();
        return $passValid;
    }

    public function checkMail($email)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->prepare('SELECT email FROM members WHERE pseudo = ?');
        $req->execute(array($email));
        $emailValid = $req->fetch();
        return $emailValid;
    }

    public function addMember($pseudo, $pass, $email)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $newMember = $bdd->prepare('INSERT INTO `members`( `pseudo`, `pass`, `email`, `date_inscription`) VALUES (?,?,?,CURDATE())');
        $newMember->execute(array($pseudo, $pass, $email));

        return $newMember;
    }
    public function getMembers()
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $member = $bdd->query('SELECT id, pseudo, DATE_FORMAT(date_inscription, "%d/%m/%Y") AS date_sub FROM members ORDER BY id');

        return $member;
    }

    public function loginMember($pseudo)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->prepare('SELECT id, pass, admin FROM members WHERE pseudo=?');
        $req->execute(array($pseudo));
        $logMember = $req->fetch();
        
        return $logMember;
    }

    public function DeleteMember($memberId)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $deleteMember = $bdd->prepare('DELETE FROM members WHERE id=?');
        $deleteMember->execute(array($memberId));

        return $deleteMember;
    }
}
