<?php
$title = "Panneau d'administration"; ?>

<?php ob_start(); ?>

<section id="adminPanel">
    <h1> Panneau d'adminstration </h1>
    <div id="adminBlock">
        <button id="writePost"><a href="index.php?action=createPost">Écrire un article</a></button>
        <div id="postManage">
            <h2 class="head">Gestion des Articles :</h2>

            <?php
            
            if (isset($_GET['update-status']) &&  $_GET['update-status'] == 'success') {
                echo '<p id="success">L\'article a bient été modifié !<p>';
            }
            elseif (isset($_GET['new-post']) &&  $_GET['new-post'] == 'success') {
                echo '<p id="success">L\'article a bient été posté !<p>';
            }
            elseif (isset($_GET['remove-post']) &&  $_GET['remove-post'] == 'success') {
                echo '<p id="success">L\'article a bien été supprimé !</p>';
            }
            $countPost = 0;
            while ($data = $posts->fetch()) {
                if (!empty($data)) {
                    ?>
                    <div class="listPanel">
                        <p>Titre : <a class="linkAdmin" href="index.php?action=updatePost&amp;id=<?= $data['id']; ?>"><?= $data['titre']; ?></a></p>
                        <a class="report" href="index.php?action=deletePost&amp;id=<?= $data['id']; ?>" onclick="return confirm('Etes vous sûre de vouloir supprimer cet article ?');"><i class="fas fa-trash-alt"></i></a>
                        <a class="report" href="index.php?action=updatePost&amp;id=<?= $data['id']; ?>"><i class="fas fa-edit"></i></a>
                        <p>Publié le : <em><?= $data['date_fr']; ?></em></p>
                        <?php
                                if ($data['date_fr'] < $data['modif_date_fr']) {
                                    echo '<p class="date"><em>Dernière modification le : ' . $data['modif_date_fr'] . '</em></p>';
                                }
                                ?>
                    </div>
            <?php
                } else {
                    echo "<p>Pas d'articles !</p>";
                }
            }
            $posts->closeCursor(); ?>
        </div>
        <div id="commentManage">
            <h2 class="head">Gestion des commentaires signalés :</h2>

            <?php
            if (isset($_GET['remove-comment']) &&  $_GET['remove-comment'] == 'success') {
                echo '<p id="success">Le commentaire a bien été supprimé !</p>';
            }
            $countReport = 0;
            while ($report = $reports->fetch()) {
                if (!empty($report)) {
                    ?>
                    <div class="listPanel">
                        <p>Auteur du commentaire : <a class="linkAdmin" href="#"><?= $report['auteur']; ?></a></p>
                        <p>Date du commentaire : <em><?= $report['date_c']; ?></em></p>
                        <a class="report" href="index.php?action=deleteComment&amp;id=<?= $report['comment_id']; ?>" onclick="return confirm('Etes vous sûre de vouloir supprimer ce commentaire ?');"><i class="fas fa-trash-alt"></i></a>
                        <p class="nbReports"><?= $report['nb_reports']; ?> signalements</p>
                        <p>Contenu : "<em> <?= $report['contenu']; ?> </em>" </p>
                    </div>
            <?php
                } else {
                    echo "<p> Pas de commentaires reportés !</p>";
                }
            }
            $reports->closeCursor(); ?>


        </div>

</section>

<?php $content = ob_get_clean(); ?>

<?php require('template.php'); ?>