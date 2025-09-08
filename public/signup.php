<?php
include 'db.php'; // Database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form se data lena
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Agar fields empty na ho
    if (!empty($email) && !empty($password)) {
        
        // Email already exists check
        $check = "SELECT * FROM users WHERE email = ?";
        $stmt = $conn->prepare($check);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            echo "⚠️ This email is already registered. Please login.";
        } else {
            // Password ko hash karna
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Insert query
            $sql = "INSERT INTO users (email, password) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ss", $email, $hashedPassword);

            if ($stmt->execute()) {
                // ✅ Redirect to login after success
                header("Location: index.html");
                exit();
            } else {
                echo "❌ Error: " . $stmt->error;
            }
        }
    } else {
        echo "⚠️ Please fill all fields!";
    }
}
?>

<!-- HTML niche rakho -->
<!DOCTYPE html>
<html>
<head>
    <title>Signup</title>
</head>
<body>
    <h2>Signup</h2>
    <form method="POST">
        <input type="email" name="email" placeholder="Enter Email" required><br>
        <input type="password" name="password" placeholder="Create Password" required><br>
        <button type="submit">Signup</button>
    </form>
    <p>Already have an account? <a href="login.php">Login here</a></p>
</body>
</html>
