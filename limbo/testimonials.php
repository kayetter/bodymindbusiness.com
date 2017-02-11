<!DOCTYPE html>
<html lang="en">
<?php require "head.php"; ?>

    <body class="blue-page logo-pic2">
        <?php require "header.php"; ?>

            <main>
                <section class="t-wrapper">
                    <h1 class="first-title">Testimonials</h1>
                    <section class="t-carousel">
                        <div id="carousel"></div>
                        <div class="button">
                            <a href="#" id="prev_btn">prev</a>
                            <a href="#" id="next_btn">next</a>
                        </div>
                    </section>
                    <div class="t-sub-wrapper">
                        <h2>Individuals</h2>
                        <div id="i-carousel"></div>
                        <h2>Teams and Organizations</h2>
                        <div id="t-carousel"></div>
                    </div>
                </section>
            </main>
        <?php 
        require "back-to-top.php"; 
        require "footer.php"; ?>


            <!--mustache js template for data //#testimonials refers to object array from JSON data-->
            <script id="testimonialtpl" type="text/template">
                {{#testimonials}}
                <span class="offset" id="{{name}}-{{category}}-anchor"></span>
                <div class="testimonial" id="{{name}}-{{category}}">
                    <p>{{message}}</p>
                    <p>⚊ <em>{{name}}</em></p>
                </div>
                {{/testimonials}}
            </script>
        <script id="carouseltpl" type="text/template">
                {{#testimonials}}
                <a class="testimonial carousel-test" href="#{{name}}-{{category}}-anchor">
                    <p>{{snippet}}</p>
                    <p>⚊ <em>{{name}}</em></p>
                </a>
                {{/testimonials}}
        </script>

    </body>

</html>