<?php ob_start(); ?>
<?php $title = "Connexion"; ?>
<section class="sectionLogin">

    <div class="blocLogin">
        <div class="blocHeadPost">
            <h3>
                Connexion
            </h3>
            <?php
            if (isset($_GET['account-status']) &&  $_GET['account-status'] == 'unsuccess-login') {
                echo '<p id="error">Mauvais identifiant ou mot de passe !<p>';
            } ?>
        </div>



        <div class="loginBlock">
            <form  action="index.php?action=loginSubmit" method="post">
                <label for="pseudo"> Pseudo : </label> <br />
                <input type="text" name="pseudo" id="pseudo" required /> <br />
                <label for="pass"> Mot de passe : </label> <br />
                <input type="password" name="pass" id="pass" required /> <br />
                <button type="submit">Login</button>
            </form>
            <a href="index.php?action=subscribe">Pour vous inscrire suivez ce lien</a>
        </div>
    </div>

</section>

<?php $content = ob_get_clean();

require('template.php');
