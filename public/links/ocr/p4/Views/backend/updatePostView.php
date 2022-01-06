<?php
$title = "Nouvel article"; ?>

<?php ob_start(); ?>

<section id="createPost">
    <h1>Panneau d'administration</h1>
    <div id="managerBlock">     
        <p class="returnLink"><a href="index.php?action=admin">Retour au menu</a></p>
        <div id="updateBlock">
            <form action="index.php?action=submitUpdate&amp;id=<?= $post['id'];?>" method="post">
                <label for="title">Titre : </label>
                <input type="text" name="title" id="title" value="<?= $post['titre'];?>" /><br />
                <textarea name="content" rows="20" cols="160"><?= nl2br($post['contenu']);?></textarea>
                <button type="submit" >Poster </button>
            </form>
        </div>
    </div>
</section>


<?php $content = ob_get_clean(); ?>

<?php require('template.php'); ?>