<?php  

header("Content-Type: text/plain; charset=iso-8859-1");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'conex.php';


$sql = "SELECT * FROM user";
$cons = $conex->query($sql);
while ($res=$cons->fetch_assoc()) 
	$vec[] = $res;

header('Content-Type: application/json');
echo json_encode($vec); 


?>