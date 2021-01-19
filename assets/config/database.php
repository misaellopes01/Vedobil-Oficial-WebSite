<?php

    $hostname = "localhost";
    $username = "@misaellopes01";
    $password = "Elieser2001";

    try {
        $connection = new PDO("mysql:host=$hostname;dbname=service", $username, $password);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        echo "Database connection failed: " . $e->getMessage();
    }

?>