<?php  

header("Content-Type: text/plain; charset=iso-8859-1");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'conex.php';

$json = file_get_contents('php://input');
$datos = json_decode($json);


$nombre = $datos->nombre;
$correo = $datos->correo;

$sql = "INSERT INTO user (id, nombre, correo) VALUES (default, '$nombre', '$correo')";
$conex->query($sql);


header('Content-Type: application/json');
$resp = ['mens' => 'OK'];
echo json_encode($resp); 


?>