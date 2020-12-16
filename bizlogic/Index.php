<?php

	$conn = mysqli_connect("localhost","root","","structure");

    if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];


    $query = $conn->query("SELECT * FROM structure WHERE username = '$username' AND password = '$password'") or die(mysql_error());
    $rows = $query->num_rows;
    $fetch = $query->fetch_array();

    if ($rows == 0) {
        echo " <br><center><font color= 'red' size='3'>Login invalid</center></font>";
    } else if ($rows > 0) {
        session_start();
        $_SESSION['id'] = $fetch['id'];
       
    }
}






?>