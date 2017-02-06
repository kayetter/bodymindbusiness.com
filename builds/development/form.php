<!DOCTYPE html>
<html lang="en">
<?php require "head.php"; ?>

    <body class="brown-page logo-pic1">
        <?php require "header.php"; ?>
            <main class="email-form">
                <form action="email.php" method=post>
                    <h1>Email Us Today!</h1>
                    <div class="text-entry" id="to-email">
                        <label for="to-email">To:</label>
                        <input type="email" name="to-email" required value="deb@bodymindbusiness.com" readonly>
                    </div>
                    <div class="form-entry">
                        <div class="text-entry" id="firstname">
                            <label for="firstname">First Name:</label>
                            <input type="text" name="firstname" required autofocus>
                        </div>
                        <div class="text-entry" id="lastname">
                            <label for="lastname">Last Name:</label>
                            <input type="text" name="lastname" required>
                        </div>
                    </div>
                    <div class="text-entry" id="from-email">
                        <label for="from-email">Your email</label>
                        <input type="email" required name="from-email" placeholder="Your email address here">
                    </div>

                    <div id="text-area-send">
                        <textarea name="message" id="message" rows="20" cols="60">
Deb, 

I am curious about the next steps in scheduling a conversation. <?php
                $id = isset($_GET["id"])?$_GET["id"]: "none";
                $phrase = "I most resonate with ";
                $message = "";
                switch($id){
                    case "":
                        $message = "";
                   case "teams-in-crisis":
                       $message = $phrase . "Teams in Crisis. ";
                       break;
                   case "high-intensity-teams":
                        $message = $phrase . "High Intensity Teams. ";
                        break;
                   case "newly-minted-teams":
                        $message = $phrase . "Newly Minted Teams. ";
                        break;
                   case "team-leaders":
                        $message = $phrase . "Team Leaders. ";
                        break;
                   case "everyone": $phrase . "completing my current role and team objectives so I can move on to something better yet. ";
                        break;
                   case "entrepreneurs":
                        $message = $phrase . "Entrepreneurs. ";
                        break;
                   case "seekers":
                        $message = $phrase . "Seekers. ";
                        break;
                   case "birthers":
                        $message = $phrase . "Birthers/Visionaries. ";
                        break;
                   case "pinch-pointers":
                        $message = $phrase . "Pinch-Pointers. ";
                        break;
                };
                echo $message
                ?>


I can be contacted at the email attached to this message. Thank you for not adding my contact information to your mailing list, making me subscribe to a membership or sign up for anything at all. I appreciate being able to just initiate a conversation, no strings attached. Looking forward to hearing from you soon.
                        </textarea>
                        <input type="submit" name="send" value="Send">
                    </div>
                </form>
            </main>
        <?php require "footer.php"; ?>

   <!--script to validate required fields on all browsers-->
   <script>
    $("form").submit(function(e) {

        var ref = $(this).find("[required]");

        $(ref).each(function(){
            if ( $(this).val() == '' )
            {
                alert("Required field should not be blank.");

                $(this).focus();

                e.preventDefault();
                return false;
            }
        });  return true;
    });
        </script>
   
    </body>

</html>