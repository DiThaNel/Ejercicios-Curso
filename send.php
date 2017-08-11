<?php
require '../../../Desktop/Ajax-PHP-MySQL-Newsletter-master/inc/Database.class.php';
require '../../../Desktop/Ajax-PHP-MySQL-Newsletter-master/inc/Newsletter.class.php';

if (!empty($_POST)) {
    $email = $_POST['signup-email'];

    Newsletter::register($email);
}