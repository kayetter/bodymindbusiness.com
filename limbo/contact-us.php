<!DOCTYPE html>
<html lang="en">
<?php require "head.php"; ?>

    <body class="purple-page logo-pic2">

        <!--script for facebook button-->
        <div id="fb-root"></div>
        <script>
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1696100190650596";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>

        <?php require "header.php"; ?>

            <main>

                <h1>Questions? Contact Us</h1>
                <address class="contact">
                    Debra Jones
                    <br>Owner and Chief Co-creator <br>
                    <a href="mailto:deb@bodymindbusiness.com">deb@bodymindbusiness.com</a>
                </address>

                <address class="contact">
                     Kristin Schneider <br>
                     Co-creator <br>
                    <a href="mailto:kristin@bodymindbusiness.com">kristin@bodymindbusiness.com</a>
                </address>

                <address class="contact">
                    Problems with website <br>
                    <a href="mailto:info@bodymindbusiness.com">info@bodymindbusiness.com</a>
                </address>
                <address>
                       <p>share us with your favorite social media</p>
                       
                       <!--twitter button-->
                    <div class="social-media">
                        <div id="twitter">
                            <a href="https://ctt.ec/243Cd"><img src="http://clicktotweet.com/img/tweet-graphic-2.png" alt="Tweet: I love love love the new https://ctt.ec/mX3IV+" /></a>
                        </div>
                    <!-- facebook button-->
                        <div class="fb-share-button facebook" data-href="https://bodymindbusiness.com" data-layout="box_count" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbodymindbusiness.com%2F&amp;src=sdkpreparse">Share</a></div>
                        
                            <!--linked button-->
                        <div id="linked-in">
                            <script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
                            <script type="IN/Share" data-url="https://bodymindbusiness.com" data-counter="top"></script>
                        </div>
                    </div>
                   </address>

            </main>
            <?php require "footer.php"; ?>
    </body>

</html>