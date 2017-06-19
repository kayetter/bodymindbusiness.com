<?php require("head.php"); ?>

<body class ='white-page' id="first-page">
  <?php require("header.php") ?>
  <main class="front-page">
  <a class = 'logo-href' href="index.php#welcome" class="logo-href">
    <picture id="logo-main-img">
          <source media="(min-width: 679px)" srcset="images/logo_w_tag.png">
          <source media="(max-width: 678px)" srcset="images/logo_w_tag_truncated.png">
          <img id="logo-main-img" src="images/logo_w_tag.png" alt="bmb logo">
      </picture>
  </a>
  <img id="deb-main-img" src="images/dkj_denim_img_trans.png" alt="debra jones full image">
    <section class="body-content">
      <?php include("portal.php") ?>
    </section>
  </main>

<?php
 require "back-to-top.php";
 require "footer.php"; ?>

</body>

</html>
