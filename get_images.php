<?php
require_once 'config_db.php';

if($_SERVER['HTTP_X_REQUESTED_WITH']=='XMLHttpRequest') {
    try {
        $gallery_id = (int) $_GET['gallery_id'];
        $stmt = $db->prepare("SELECT * FROM images WHERE gallery_id = ?");
        $stmt->execute( array($gallery_id) );
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
        $db = null;
        }
    catch(PDOException $e)
        {
            echo $e->getMessage();
        }

}



?>