<?php

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$address = $_POST['address'];
$cpf = $_POST['cpf'];
$cardNumber = $_POST['cardNumber'];
$expiryDate = $_POST['expiryDate'];
$cvv = $_POST['cvv'];

$conn = new mysqli("localhost", "root", "", "meu_banco");

if ($conn->connect_error) {
  die("Error connecting to database: " . $conn->connect_error);
}

$sql = "INSERT INTO orders (fullname, email, address, cpf, cardNumber, expiryDate, cvv) VALUES ('$fullname', '$email', '$address', '$cpf', '$cardNumber', '$expiryDate', '$cvv')";
$result = $conn->query($sql);

if (!$result) {
  die("Error inserting data: " . $conn->error);
}

$conn->close();

header("Location: /thanksp.html");

?>