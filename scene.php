<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Nestlé eCard</title>
  <meta http-equiv="content-type" content="text/html;charset=UTF-8" />    
  <link href="css/scene.css" rel="stylesheet" type="text/css" media="screen" />
  <link href="css/screen.css" rel="stylesheet" type="text/css" media="screen" />
  <audio src="sounds/N1.mp3" onended="this.play();" autobuffer></audio>
</head>
<body>

<div id="scene_container">
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
	<div id="content">
      <div class="paper-curl"><img src='./images/page_curl<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='Nestle' /></div>
      <div id="mask">
        <div class="msg-prt1-mask">
          <div class="msg-prt1">
            <img src='./images/seasons_greetings<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='Seasons greetings' />
          </div>
        </div>
        <div class="msg-prt2-mask">
          <div class="msg-prt2">
            <img src='./images/from_nestle<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='from Nestle' />
          </div>
        </div>
        <div id="scene">
          <div class="tree-lights-large">
            <img src='./images/tree_lights_large<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='tree lights' />
          </div>
          <div class="tree-lights-small">
            <img src='./images/tree_lights_small<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='tree lights' />
          </div>
          <div class="snow-fall">
            <img src='./images/snow_heavy<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='snow fall' />
            <img src='./images/snow_heavy<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='snow fall' />
          </div>
          <div class="tree-snow">
            <img src='./images/tree_snow<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='tree snow' />
          </div>
          <ul class="house-lights">
            <li id="house-light" class="house-light-1"><img src='./images/house_light_1<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='house lights' /></li>
            <li id="house-light" class="house-light-2"><img src='./images/house_light_2<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='house lights' /></li>
            <li id="house-light" class="house-light-3"><img src='./images/house_light_3<?php if($mobile==true):?>-mobile<?php endif;?>.jpg' title='house lights' /></li>
            <li id="house-light" class="house-light-4"><img src='./images/house_light_4<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='house lights' /></li>
            <li id="house-light" class="house-light-5"><img src='./images/house_light_5<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='house lights' /></li>
          </ul>
          <div class="land"><img src='./images/land<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='land' /></div>
          <div class="santas-slay"><img src='./images/santas_slay.png' title='Santa' /></div>
          <div class="northern-light-2">
            <img src='./images/northern_lights<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='northern lights' />
          </div>
          <div class="shooting-star"><img src='./images/shooting_star<?php if($mobile==true):?>-mobile<?php endif;?>.png' title='Shooting star' /></div>
          <div class="sky"><img src='./images/starry_night<?php if($mobile==true):?>-mobile<?php endif;?>.jpg' title='sky' /></div>
        </div>
      </div>
	</div>

</div>

</body>
</html>
