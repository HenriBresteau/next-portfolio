<?php

namespace Projet4;

require_once('./Model/DbManager.php');

class ReportManager 
{
    public function getIdReports($memberId)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->prepare('SELECT comment_id FROM reports WHERE member_id = ?');
        $req->execute(array($memberId));
        $reports = $req->fetchAll(\PDO::FETCH_ASSOC);
        $idComment = array();
        foreach ($reports as $value) {
            $idComment[] = $value['comment_id'];
        }
        return $idComment;
    }
    public function postReports($commentId, $memberId)
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $req = $bdd->prepare('INSERT INTO reports(comment_id, member_id, report_date) VALUES(?, ?, NOW())');
        $reported = $req->execute(array($commentId, $memberId));
        return $reported;
    }
    public function getReports()
    {
        $dbManager = DbManager::getInstance();
        $bdd = $dbManager->connect();
        $reports = $bdd->query('SELECT COUNT(*) AS nb_reports, comment_id, auteur, contenu, DATE_FORMAT(date, "%d/%m/%Y %H:%i:%s") AS date_c FROM reports INNER JOIN comments ON reports.comment_id = comments.id GROUP BY comment_id HAVING nb_reports >= 2 ORDER BY nb_reports DESC');
        return $reports;
    }
}
