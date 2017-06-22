<?php require("head.php"); ?>

<body class ='white-page' id="first-page">
  <?php require("header.php") ?>
  <main class="front-page">
  <a class = 'logo-href' href="index.php#welcome" class="logo-href">
    <picture id="logo-main-img">
      <source media="(min-width: 1100px)" srcset="images/LogoTagDJyes_1300.png">
          <source media="(min-width: 679px)" srcset="images/logo_w_tag.png">
          <source media="(max-width: 678px)" srcset="images/logo_w_tag_truncated.png">
          <img id="logo-main-img" src="images/logo_w_tag.png" alt="bmb logo">
      </picture>
  </a>
  <picture>
    <source media="(min-width: 1000px)" srcset="images/Deb_jacketHighRes_2000.png">
    <source media="(min-width: 800px)" srcset="images/Deb_jacketHighRes_1000.png">
    <source media="(min-width: 600px)" srcset="images/Deb_jacketHighRes_800.png">
    <source media="(min-width: 400px)" srcset="images/Deb_jacketHighRes_600.png">
    <img id="deb-main-img" src="images/Deb_jacketHighRes_400" srcset = "images/Deb_jacketHighRes_2000 2x" alt="debra jones full image">
  </picture>
    <section class="body-content" scrollbar>

        <?php include("portal.php") ?>

    </section>
  </main>



<?php
 require "back-to-top.php";
 require "footer.php"; ?>

</body>

</html>
