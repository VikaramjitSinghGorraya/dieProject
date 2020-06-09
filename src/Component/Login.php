<?php
$serverName = "localhost";
$username = "root";
$password ="Me@9501444393";
$databaseName = "dice";
$conn = mysqli_connect($serverName,$username,$password,$databaseName);
if($conn){
    echo 'connected';
}
else{
    echo 'not connected';
}
$data = json_decode(file_get_contents("php://input"), TRUE);
$recText= $da;
$query = "SELECT * from user where Email_Id = $recText";

$result = $conn->query($query);
if($result-> num_rows > 0){
    while($row = $result->fetch_assoc()){
        echo "Name:".$row["Name"];
    }
}
else{
    echo "0 results";
}
//if(mysqli_query($conn,$query)){
//$result = mysqli_query($conn,$query);
//if(mysqli_num_rows($result)>0)
//{
//echo $row["Id"];
//}
//}
//else{
//echo "Nope";
//}
