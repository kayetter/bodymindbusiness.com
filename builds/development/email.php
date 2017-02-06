<!DOCTYPE html>
<html lang="en">
<?php require "head.php"; ?>

    <body class="brown-page logo-pic2">
        <?php require "header.php"; ?>

            <main>
                <h1>Your email has been sent.</h1>
                <?php
            $toEmail = $_POST['to-email'];
            $firstName = $_POST['firstname'];
            $lastName = $_POST['lastname'];
            $fromEmail = $_POST['from-email'];
            $message = wordwrap($_POST['message'],70);
            $send = $_POST['send'];
            $headers = "From: {$fromEmail}"."\r\n";
            $headers .= "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

            // send email
            mail($toEmail,"Email from www.bodymindbusiness.com",$message,$headers);
        ?>
            </main>

            <?php require "footer.php"; ?>

    </body>

</html>