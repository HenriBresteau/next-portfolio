<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title><?= isset($title) ? $title : 'Billet simple pour l\'Alaska' ?></title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/f7236c7bf1.js" crossorigin="anonymous"></script>
    <link rel='stylesheet' type='text/css' media='screen' href='public\css\style.css'>
    <script src='public\js\main.js'></script>
</head>

<body>
    <main>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">

                <a class="navbar-brand" href="">Jean Forteroche</a>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <a class="nav-link" href="index.php"><i class="fas fa-book-open"></i> Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.php?action=about">A propos</a>
                        </li>
                        <?php
                        if (!empty($_SESSION)) {
                            echo '<li class="nav-item"><a class="nav-link"><i class="fas fa-user"></i> ' . htmlspecialchars($_SESSION['pseudo']) . '</a></li>';
                        }
                        if (!empty($_SESSION) && $_SESSION['admin'] == '1') {
                            echo '<li class="nav-item"><a class="nav-link" href="index.php?action=admin"><i class="fas fa-key"></i> Administration</a></li>';
                        }
                        if (!empty($_SESSION)) {
                            echo '<li class="nav-item"><a class="nav-link" href="index.php?action=logout">Déconnexion</a></li>';
                        } else {
                            echo '<li class="nav-item"><a class="nav-link" href="index.php?action=login">Connexion </a></li>';
                        }
                        ?>
                    </ul>


                </div>
            </nav>

            <div class="page-header">
                <h1> Billets simple pour l'Alaska </h1>
            </div>

        </header>

        <?= $content ?>
    </main>

    <footer>
        <p>© 2019 Henri Bresteau</p>
    </footer>
</body>

</html>