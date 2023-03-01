<!DOCTYPE html>
<html>
<body>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "outlanderDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, name, email, website, comment, gender FROM Outlanders";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["id"]. " - Name: ". $row["name"]. "- Email: ". $row["email"]. "- Website: ". $row["website"]. "- Comment: ". $row["comment"]. "- Gender: ". $row["gender"];
    }
} else {
    echo "0 results";
}

$conn->close();
?>

</body>
</html>