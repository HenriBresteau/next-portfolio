<?php
$title = "À propos";
ob_start();
?>


<section class="about">
    <div class="aboutBlock">
        <div class="headAbout">
            <h3> Jean Forteroche, un homme dont les écrits bouleversent. </h3>
        </div>
        <div class="contentAbout">
            <img id="photo" src="public/img/ecrivain.jpg" alt=" Ecric Vain en train d'écrire" />
            <p> Né en 1950 Jean Forteroche n'a eu cesse depuis d'épater la galerie par ces incessants apports dans <strong>le monde de la culture</strong>, <strong> des sciences</strong> en particulier au sein de la <strong><em>«confédération des écrivains de Lyon de France et de Navarre» </em> </strong> association créée par <em>Philippe III le Hardi </em> il prit le pouvoir un vendredi peu avant l'heure du repas.</p>
            <p>Jean Forteroche a entamé son chemin vers la gloire en <strong> inventant </strong> les cafetières qui devinrent depuis le summum de la distinction pour tout homme moderne. En effet qui depuis n'a pas exhibé fièrement ses cafetières à la foule envieuse ? Pour cela, les habitants de la <strong> planète entière </strong> et en particulier de Lyon lui sont reconnaissants.</p>
            <blockquote>
                <p> Il est sur qu'Jean Forteroche est sûrement le plus grand écrivain du monde </p>
                <footer>—Henry Bernanos, <cite>Le Monde</cite></footer>
            </blockquote>
            <img  id="livre" src="public/img/livre.png" alt=" Livre d'Ecric Vain" /><p>C'est par un beau jour en avril que Vain a rencontré <em> Marie Jeanne </em> et décida de la conquérir grâce à son charme et au prestige que lui avait donné l'invention des cafetières. Marie Jeanne dira pourtant plus tard <em>«ce qui m'a fait le plus craquer chez éric, c'est la proéminence de ses épaules!»</em>. Elle ne s'en est d'ailleurs jamais remis depuis. </p>
                
            <p>Il s'attelle à la rédaction de : <em>«Billets pour l'Alaska » </em>, Une œuvre <strong> majeure </strong> qui l'occupera jusqu'à ce qu'il atteigne 69 ans cet opus sortira en librairie vendredi prochain. </p>

            <p> Le livre est tant <strong> attendu </strong> que l'éditeur prétend pouvoir gagner, grâce à sa publication, une somme <strong> astronomique</strong></p>
            
            <p>Comme l'a si justement fait remarquer <em> Henry Bernanos</em> : « <em> Ce livre est une œuvre impérissable que Vain a écrit sans aucune concession. »</em>. </p>

        </div>

    </div>
</section>

<?php $content = ob_get_clean();

require('template.php');
