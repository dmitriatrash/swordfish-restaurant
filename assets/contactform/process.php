<?php 
	header("Content-type: application/json");
	$message = array('message'=>'Thank you for your submission! We appreciate your feedback.');
	echo json_encode($message); 
?>