<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Nestlé eCard</title>
  <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
  <?php
   
  $mobile_browser = '0';
  $tablet_browser = '0';
  $mobile = false;
  $tablet = false;
   
  if (preg_match('/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android)/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
      $mobile_browser++;
  }
  
  if (preg_match('/iPad/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
      $tablet_browser++;
  }
   
  if ((strpos(strtolower($_SERVER['HTTP_ACCEPT']),'application/vnd.wap.xhtml+xml') > 0) or ((isset($_SERVER['HTTP_X_WAP_PROFILE']) or isset($_SERVER['HTTP_PROFILE'])))) {
      $mobile_browser++;
  }    
   
  $mobile_ua = strtolower(substr($_SERVER['HTTP_USER_AGENT'], 0, 4));
  $mobile_agents = array(
      'w3c ','acs-','alav','alca','amoi','audi','avan','benq','bird','blac',
      'blaz','brew','cell','cldc','cmd-','dang','doco','eric','hipt','inno',
      'ipaq','java','jigs','kddi','keji','leno','lg-c','lg-d','lg-g','lge-',
      'maui','maxo','midp','mits','mmef','mobi','mot-','moto','mwbp','nec-',
      'newt','noki','oper','palm','pana','pant','phil','play','port','prox',
      'qwap','sage','sams','sany','sch-','sec-','send','seri','sgh-','shar',
      'sie-','siem','smal','smar','sony','sph-','symb','t-mo','teli','tim-',
      'tosh','tsm-','upg1','upsi','vk-v','voda','wap-','wapa','wapi','wapp',
      'wapr','webc','winw','winw','xda ','xda-');
   
  if (in_array($mobile_ua,$mobile_agents)) {
      $mobile_browser++;
  }
   
  /*
  if (strpos(strtolower($_SERVER['ALL_HTTP']),'OperaMini') > 0) {
      $mobile_browser++;
  }
  */
   
  if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']),'windows') > 0) {
      $mobile_browser = 0;
  }
   
  if ($mobile_browser > 0) {
	 $mobile = true;
  }
  elseif($tablet_browser > 0) {
	 $tablet = true;
  }
  else {
     // do something else
  }   
   
  ?>
  <?php if($mobile==true):?>
    <meta name="viewport" content="width=device-width, initial-scale=0.4, maximum-scale=0.4">
  <?php elseif($tablet==true):?>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <?php else:?>
    <meta name="viewport" content="width=device-width, initial-scale=0.4, maximum-scale=1">
  <?php endif;?>
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/easing.js"></script>
  <script type="text/javascript" src="js/jquery.imageScroller.js"></script>
  <script type="text/javascript" src="js/loader.js"></script>
  <link href="css/scene.css" rel="stylesheet" type="text/css" media="screen" />
  <link href="css/screen.css" rel="stylesheet" type="text/css" media="screen" />
  <?php if($mobile==true):?>
    <link href="css/scene-mobile.css" rel="stylesheet" type="text/css" media="screen" />
  <?php endif;?>
</head>
<body class="ipad <?php if($mobile==true):?>mobile<?php endif;?>">
<div id="container">
</div>
<div id="wrapper">
<div id="nav">
<div class="stamp"><a href="scene.php"></a></div>
<div class="envelope"><img src="./images/envelope_closed.gif"/></div>
<noscript>
  You need to turn javascript on in your browser preferences and re-fresh the page.
</noscript>
</div>
<div id="footer">
<div class="instructions"><img title="Click stamp to open your card" alt="Click stamp to open your card" src="./images/instructions.png"/></div>
<div class="copyright">© Nestlé 2011</div>
<div class="help">
The best viewing experience will be had when viewed over a WIFI network.<br/><br/>
If you're having trouble seeing the animation above<br/>
you may need to turn javascript on in your browser preferences.
</div>
</div>
<img title="pre-load" style="display:none" src='./images/starry_night<?php if($mobile==true):?>-mobile<?php endif;?>.jpg' />
<img title="pre-load" style="display:none" src='./images/land<?php if($mobile==true):?>-mobile<?php endif;?>.png'/>
<img title="pre-load" style="display:none" src='./images/snow_heavy<?php if($mobile==true):?>-mobile<?php endif;?>.png'/>
</body>
</html>
