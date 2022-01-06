<?php

namespace Projet4;

class Autoloader
{
    static function register()
    {
        // appel fonction autoload de la class Autoloader sous forme d'array
        spl_autoload_register(array(__CLASS__, 'autoload'));
    }
    static function autoload($class)
    {
        if (strpos($class, __NAMESPACE__ . '\\') == 0) {
            // var_dump($_SERVER["DOCUMENT_ROOT"]);
            // $str = str_replace("/kunden", "",$_SERVER["DOCUMENT_ROOT"]);
            // var_dump($str);
            // remplace le chemin du namespace par une string vide pour accéder aux class
            $class = str_replace(__NAMESPACE__ . '\\', '', $class);
            require './Model/' . $class . '.php';
        }
    }
}
