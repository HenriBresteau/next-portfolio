<?php $title = "Inscrivez-vous"; ?>

<?php ob_start(); ?>

<section id="sectionSubscribe">
    <?php
    if (isset($_GET['error']) && $_GET['error'] == 'invalidUsername') {
        echo '<p id="error">Pseudo déjà utilisé</p>';
    }
    if (isset($_GET['error']) && $_GET['error'] == 'invalidMail') {
        echo '<P id="error">Adresse email déjà utilisée</p>';
    }
    
    ?>
    <div class="loginBlock">
        <form action="index.php?action=addMember" method="post">
            <label for="pseudo">Pseudo</label><br />
            <input type="text" name="pseudo" id="pseudo" required placeholder="entrer votre Pseudo"/><br />
            <label for="pass">Mot de passe</label><br />
            <input type="password" name="pass" id="pass" required /><br />
            <label for="pass_confirm">Retapez votre mot de passe</label><br />
            <input type="password" name="pass_confirm" id="pass_confirm" required /><br />
            <label for="mail">Adresse email</label><br />
            <input type="email" name="mail" id="mail" required placeholder="nom.prenom@mail.com"/><br />
            <button type="submit">S'inscrire</button>
            </form>
    </div>




</section>


<?php $content = ob_get_clean(); ?>

<?php require('template.php'); ?>