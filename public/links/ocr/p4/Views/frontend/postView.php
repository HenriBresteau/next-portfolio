<?php ob_start(); ?>

<section class="sectionPost">
    <p class="returnLink"><a href="index.php">Retour à la liste des chapitres</a></p>
    <div class="blocPost">
        <div class="blocHeadPost">
            <h3>
                <?= htmlspecialchars($post['titre']); ?>
            </h3>
            <p class="date"><em>Publié par <?= $post['auteur'] ?> <?= $post['date_fr']; ?></em></p>

        </div>

        <div class="blocContentPost">
            <?= $post['contenu']; ?>
            <br />
        </div>
        <div class="comments">
            <h3> Commentaires : </h3>
            <?php
            while ($comment = $comments->fetch()) {
                ?>
                <div class="autorComment">
                    <p><i class="far fa-user"></i><strong> <?= htmlspecialchars($comment['auteur']); ?> </strong> <?= $comment['date_fr']; ?> : </p>
                </div>
                <div class="contentComment">
                    <?php
                        if (!empty($_SESSION)) {
                            if ($comment['auteur'] !== $_SESSION['pseudo']) {
                                echo '<p class="report"><a href="index.php?action=report&amp;id=' . $comment['id_post'] . '&amp;comment-id=' . $comment['id'] . '"><i class="fas fa-exclamation-triangle"></i> Signaler </a></p>';
                            }
                        }

                        ?>
                    <p> <?= htmlspecialchars($comment['contenu']); ?></p>
                </div>
            <?php
            }   ?>
        </div>
        <?php
        if (!empty($_SESSION)) {
            ?>
            <div class="commentsForm">
                <p> Laissez un commentaire</p>
                <form action="index.php?action=addComment&amp;id=<?= $post['id'] ?>" method="post">
                    <label for="comment"> Commentaire : </label> <br />
                    <textarea id="comment" name="comment"> </textarea>
                    <button type="submit"> Envoyer</button>
                </form>
            </div>

        <?php } else {
            echo '<div id="info"> Vous devez vous <a  href="index.php?action=login">connecter </a>pour laisser un commentaire </div>';
        }
        ?>


    </div>
    </div>

</section>

<?php $content = ob_get_clean();

require('template.php');
