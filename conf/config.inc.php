<?php
/**
 * Conectamos a la base de datos
 */
$bd_host = "localhost";
$bd_nombre = "ahorcado";
$bd_usuario = "usuario";
$bd_password = "1234";
$conexion = @mysqli_connect($bd_host, $bd_usuario, $bd_password, $bd_nombre) or die ("no se puede conectar a la Base de Datos");

 mysqli_set_charset( $conexion, 'utf8');
/**
 * Carga de librerias
 */

include_once("lib/tpl.inc.php");

session_start();
$tpl = new tpl("");

?>