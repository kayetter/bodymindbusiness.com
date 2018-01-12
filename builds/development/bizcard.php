<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name = "viewport" content = "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BodyMindBusiness</title>

    <!----Facebook OG content -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="fb:app_id" content="1696100190650596" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://bodymindbusiness.com/bizcard.php" />
    <meta property="og:title" content="BodyMindBusiness" />
    <meta property="og:description" content="At BodyMindBusiness, we help you reclaim the way you work, think and live. We seek to transform lives, companies and communities with an intuitive and holistic approach to creating sustainable, integrated and sexy systems that elevate wellness, productivity and profits." />
    <meta property="og:image"  content="https://bodymindbusiness.com/images/businesscard.png" />

    <!-------twitter OG content------------->
    <meta name="twitter:site" content="@bodymindbusines" />
    <meta name="twitter:creator" content="@thedameranch" />
    <meta property="twitter:image"  content="https://bodymindbusiness.com/images/businesscard.png" />
    <meta name="twitter:title" content="BodyMindBusiness"/>
    <meta name="twitter:description" content="At BodyMindBusiness, we help you reclaim the way you work, think and live. We seek to transform lives, companies and communities through elevate wellness, productivity and profits."/>
    <meta name="twitter:domain" content="bodymindbusiness.com/process_bizcard.php"/>
    <meta name="twitter:card" content="summary" />
      <!--        favicon links                        -->
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">

        <!-------------Stylesheet Links---------------->
        <link rel="stylesheet" href="css/lib-styles.css">
        <link rel="stylesheet" href="css/style.css">

</head>


<body>  <?php

  $path = "docs/";
  $file = "debra_jones.vcf";

  header('Content-Type: text/x-vCard');
  header('Content-Disposition: attachment; filename= "'.$file.'"');
  header('Content-Length: '.filesize($path.$file));
  header('Connection: close');

  readfile($path.$file);




   ?></body>

   </html>
