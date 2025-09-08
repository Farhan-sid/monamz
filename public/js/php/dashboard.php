<?php
session_start();

// Agar login nahi hai to redirect back to login
if (!isset($_SESSION['email'])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h2>Welcome <?php echo $_SESSION['email']; ?> 🎉</h2>
    <p>This is your dashboard page.</p>
    <a href="logout.php">Logout</a>
</body>
</html>
