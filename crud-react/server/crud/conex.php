<?php 

$host = 'localhost';
$user = 'root';
$password = '';
$db = 'crud';


$conex = new mysqli($host, $user, $password, $db) or die ('Error al conectar con la Base de Datos');
$conex->query('SET CHARACTER SET utf8');



?>
