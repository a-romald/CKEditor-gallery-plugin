<?php

$db = new PDO("mysql:host=localhost;dbname=db1",'user','secret');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
$db->exec('SET CHARACTER SET utf8');

$query = $db->query("SELECT * FROM galleries");
$result = $query->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);

?>