<?php

namespace Projet4;

class DbManager
{
    private static $bdd;

    protected static $instance; // Contiendra l'instance de notre classe.

    protected function __construct()
    { } // Constructeur en privé.
    protected function __clone()
    { } // Méthode de clonage en privé aussi.

    public static function getInstance()
    {
        if (!isset(self::$instance)) // Si on n'a pas encore instancié notre classe.
        {
            self::$instance = new self; // On s'instancie nous-mêmes. :)
        }

        return self::$instance;
    }

    public static function connect()
    {
        self::$bdd = new \PDO('mysql:host=db5000214437.hosting-data.io;dbname=dbs209191;charset=utf8', 'dbu222867', 'bdd_Projet4');
        self::$bdd->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);

        return self::$bdd;
    }

    public static function disconnect()
    {
        self::$bdd = null;
    }
}
