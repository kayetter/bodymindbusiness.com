<?php

$path = "docs/";
$file = "test.vcf";

header('Content-Type: text/x-vCard');
header('Content-Disposition: attachment; filename= "'.$file.'"');
header('Content-Length: '.filesize($path.$file));
header('Connection: close');

readfile($path.$file);

header("Location: docs/debra_jones.vcf");
  exit;




 ?>
