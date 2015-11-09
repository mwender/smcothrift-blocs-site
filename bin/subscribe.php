<?php	
	if(empty($_POST['name']) || empty($_POST['email']))
	{
		return false;
	}
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from smcothrift.01.";
	$email_body = "You have received a new message. \n\n".
				  "Name: $name \nEmail: $email \n";
	$headers = "From: contact@yoursite.com\n";
	$headers .= "Reply-To: $email";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>