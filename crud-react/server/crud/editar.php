<?php  

header("Content-Type: text/plain; charset=iso-8859-1");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'conex.php';

$json = file_get_contents('php://input');
$datos = json_decode($json);


$id = $datos->id;
$nombre = $datos->nombre;
$correo = $datos->correo;

$sql = "UPDATE user SET nombre='$nombre', correo='$correo' WHERE id=$id";
$conex->query($sql);


header('Content-Type: application/json');
$resp = ['mens' => 'OK'];
echo json_encode($resp); 


?>