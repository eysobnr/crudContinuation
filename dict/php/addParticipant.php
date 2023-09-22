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


    $sql = "INSERT INTO participants (firstname, lastname, address, gender, agency, email, remarks) " . 
            "VALUES ('". $firstname ."', " .
                    "'". $lastname ."', " .
                    "'". $address ."', " .
                    "'". $gender ."', " .
                    "'". $agency ."', " .
                    "'". $email ."', " .
                    "'". $remarks ."')";

    mysqli_query($connection, $sql);

    echo mysqli_insert_id($connection);

    mysqli_close($connection);

?>