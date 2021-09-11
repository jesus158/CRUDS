<?php  

header("Content-Type: text/plain; charset=iso-8859-1");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'conex.php';


$id = $_GET['id'];

$sql = "DELETE FROM user WHERE id=$id";
$conex->query($sql);


header('Content-Type: application/json');
$resp = ['mens'=>'OK'];
echo json_encode($resp); 


?>