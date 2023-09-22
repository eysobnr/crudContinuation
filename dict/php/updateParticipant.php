<?php 

    include 'connection.php';

    // check database connection
    if (!$connection)
        die("Connection failed: " . mysqli_connect_error());

    function validate_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $firstname = validate_input($_POST['firstname']);
    $lastname = validate_input($_POST['lastname']);
    $address = validate_input($_POST['address']);
    $gender = validate_input($_POST['gender']);
    $agency = validate_input($_POST['agency']);
    $email = validate_input($_POST['email']);
    $remarks = validate_input($_POST['remarks']);


    $sql = "UPDATE participants SET " . 
            "firstname = '". $firstname ."', " .
            "lastname = '". $lastname ."', " .
            "address = '". $address ."', " .
            "gender = '". $gender ."', " .
            "agency = '". $agency ."', " .
            "email = '". $email ."', " .
            "remarks = '". $remarks ."'" .
            "WHERE id = " . $_POST['id'];

    if (mysqli_query($connection, $sql)) {
        $success = true;
    } else {
        $success = false;
    }
                   
    echo $success;

    mysqli_close($connection);

?>