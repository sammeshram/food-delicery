<?php
$servername = "localhost"; // Hostname (usually 'localhost')
$username = "root";        // MySQL username (replace with your username)
$password = "";            // MySQL password (replace with your password)
$dbname = "user_management"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
