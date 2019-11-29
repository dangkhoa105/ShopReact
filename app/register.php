<?php
//đăng kí
include('connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$name = $obj['name'];
$email = $obj['email'];
$password = md5($obj['password']);
$checkEmail  = strstr($email, '@');
$checkName  = '/\d+/';
$checkPass   = '/^[a-zA-Z0-9]*$/';
if($checkEmail == '@gmail.com' && !preg_match($checkName, $name) && preg_match($checkPass, $password)  ){
	
	$sql = "INSERT INTO users(email,password,name) VALUES('$email','$password','$name')";
	$result = $mysqli->query($sql);
	if($result){
		echo 'THANH_CONG';
	}
	else{
		echo 'KHONG_THANH_CONG';
	}
}
else{
	echo 'KHONG_THANH_CONG';
}
?>