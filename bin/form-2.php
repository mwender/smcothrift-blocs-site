<?php	
	if(empty($_POST['name2']) || empty($_POST['email2']) || empty($_POST['message']))
	{
		return false;
	}
	
	$name2 = $_POST['name2'];
	$email2 = $_POST['email2'];
	$message = $_POST['message'];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from smcothrift.01.";
	$email_body = "You have received a new message. \n\n".
				  "Name2: $name2 \nEmail2: $email2 \nMessage: $message \n";
	$headers = "From: contact@yoursite.com\n";
	$headers .= "Reply-To: $email2";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>