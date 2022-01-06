<?php

ob_start();
?>


<section class="framePost">
    <?php
    if (isset($_GET['account-status']) && $_GET['account-status'] == 'account-successfully-created') {
        echo '<p id="success">Votre compte a bien été créé. <a href="index.php?action=login">Se connecter</a></p>';
    }
    if (isset($_GET['logout']) && $_GET['logout'] == 'success') {
        echo '<p id="success">Vous êtes bien deconnecté.</p>';
    }
    while ($data = $posts->fetch()) {
        if (!empty($data)) {
            ?>

            <div class="post">
                <div class="headPost">
                    <h3>
                        <a class="shadowText" href="index.php?action=post&amp;id=<?= htmlspecialchars($data['id']); ?>"><?= htmlspecialchars($data['titre']); ?> </a>
                        <p class="date"><em>Publié par <?= $data['auteur'] ?> <?= $data['date_fr']; ?></em></p>
                    </h3>
                </div>
                <div class="content">
                    <div class="content-extract">
                        <?php
                                $extract = substr($data['contenu'], 0, 450);
                                echo $extract . "...";
                                ?>                        
                        <div class="readMore">
                            <a href="index.php?action=post&amp;id=<?= $data['id']; ?>"> <em>Lire la suite </em></a>
                        </div>

                    </div>
                    <div class="articles">
                    </div>
                </div>
            </div>

    <?php
        } else {
            echo "Ce billet n'existe pas.";
        }
    }
    $posts->closeCursor();

    ?>
    </div>

</section>

<?php $content = ob_get_clean();

require('template.php');
