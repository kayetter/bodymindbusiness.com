<?php require("head.php"); ?>

<body class ='white-page' id="first-page">
  <?php require("header.php") ?>
  <main class="front-page">
  <a class = 'logo-href' href="index.php#welcome" class="logo-href">
    <picture id="logo-main-img">
      <source media="(min-width: 1100px)" srcset="images/LogoTagDJyes_1300-c810959aab.png">
          <source media="(min-width: 679px)" srcset="images/logo_w_tag-ee0f8443c2.png">
          <source media="(max-width: 678px)" srcset="images/logo_w_tag_truncated-03869ca4f3.png">
          <img id="logo-main-img" src="images/logo_w_tag-ee0f8443c2.png" alt="bmb logo">
      </picture>
  </a>
  <picture>
    <source media="(min-width: 1000px)" srcset="images/Deb_jacketHighRes_2000-cb3c6d6a9f.png">
    <source media="(min-width: 800px)" srcset="images/Deb_jacketHighRes_1000-3f250d9b36.png">
    <source media="(min-width: 600px)" srcset="images/Deb_jacketHighRes_800-f1eaaf5a84.png">
    <source media="(min-width: 400px)" srcset="images/Deb_jacketHighRes_600-8c275385c7.png">
    <img id="deb-main-img" src="images/Deb_jacketHighRes_400-cf51887449.png" srcset = "images/Deb_jacketHighRes_2000-cb3c6d6a9f.png 2x" alt="debra jones full image">
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
