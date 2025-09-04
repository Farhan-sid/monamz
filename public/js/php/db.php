<?php
$conn = new mysqli("localhost", "root", "", "monamz");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>

<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Signup successful! Your Login ID is: " . $conn->insert_id;
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        if (password_verify($password, $row['password'])) {
            echo "Login successful! Your ID is: " . $row['id'];
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "No user found!";
    }
}
?>
