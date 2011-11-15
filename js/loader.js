$(document).ready(function() {
						   
	var hash = window.location.hash.substr(1);
	var href = $('#nav a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.php #container';
			$('#container').load(toLoad)
		}											
	});

	$('#nav a').click(function(){
		
		var container = $('#container');
		//var toLoad = $(this).attr('href')+' #container';
		//$('#container').hide('fast',loadContent);
		//$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		//$('#load').fadeIn('normal');
		//window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			container.load("scene.php", hideLoader);
			//$('#container').load(toLoad,'',showNewContent())
		}
		loadContent();
		function showNewContent() {
			//$('#container').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
			$('#nav').fadeOut('normal');
			$('.instructions').fadeOut('normal');
			$("#container").animate({
			  opacity: '1',
			  filter: 'alpha(opacity=100)',
			  height:'562px'
			},1000); 
			scene_ani();
		}
		
		function html5_audio(){
			var a = document.createElement('audio');
			return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
		}
		 
		var play_html5_audio = false;
		if(html5_audio()) play_html5_audio = true;
		 
		function play_sound(url){
			if(play_html5_audio){
				var snd = new Audio(url);
				snd.load();
				snd.play();
			}else{
				$("#sound").remove();
				var sound = $("<embed id='sound' type='audio/mpeg' />");
				sound.attr('src', url);
				sound.attr('loop', true);
				sound.attr('hidden', true);
				sound.attr('autostart', true);
				$('body').append(sound);
			}
		}
		
		play_sound('../ecard/sounds/N1.mp3');
		
		function scene_ani() {
			
		  function northern_lights() {
			 $(".northern-light-2").animate({opacity: '1',filter: 'alpha(opacity=100)',"left": "-450px","top": "500px"}, 20000, function() { 
				  //$(this).animate({"left": "580px","top": "100px"}, 25000) 
			  });
			 /*
			  $(".northern-light-1").delay(5000).animate({opacity: '1',filter: 'alpha(opacity=100)',"left": "580px","top": "300px"}, 25000, function() { 
				  $(this).animate({"left": "-450px","top": "500px"}, 25000) 
			  });
			  */
			  //setTimeout(northern_lights, 50000);
		  }
		  
		  var snow_fall = $(".snow-fall");
		  //var snow_fall_slow = $(".snow-fall-slow");
		  
		  $(".shooting-star").delay(6000).animate({
			opacity: '1',
			filter: 'alpha(opacity=100)',
			top:'700px',
			right:'700px'
		  },1000, northern_lights); 
		  
		  //play_sound('/ecard/sounds/N1.mp3');
		  
		  $('#scene').delay(2000).animate({
			top: '-622px'
		  }, 10000, function() {
			  
			var snow_fall = $(".snow-fall");
			/*  
			snow_fall_slow.delay(3000).imageScroller( {speed:'20000', direction:'bottom'} );
			snow_fall_slow.animate({
			  opacity: '1',
			  filter: 'alpha(opacity=100)'
			}, 3000);
			*/
			
			snow_fall.delay(3000).imageScroller( {speed:'9000', direction:'bottom'} );
			snow_fall.animate({
			  opacity: '1',
			  filter: 'alpha(opacity=100)'
			}, 3000, function() {
								
			  $(".house-light-1").animate({
				opacity: '1',
				filter: 'alpha(opacity=100)'				  
			  },200,function() {
			  
				$(".house-light-2").delay(1000).animate({
				  opacity: '1',
				  filter: 'alpha(opacity=100)'				  
				},200,function() {
				  
				  $(".tree-snow").animate({
					opacity: '0.8',
					filter: 'alpha(opacity=80)'				  
				  },2000,function() {
				
				  $(".tree-lights-small").animate({
					opacity: '1',
					filter: 'alpha(opacity=100)'				  
				  },1000);
				  $(".tree-lights-large").animate({
					opacity: '1',
					filter: 'alpha(opacity=100)'				  
				  },1000);
				  
				  });
				  
				  $(".house-light-3").delay(1000).animate({
					opacity: '1',
					filter: 'alpha(opacity=100)'				  
				  },200,function() {
					
					$(".house-light-4").delay(1000).animate({
					  opacity: '1',
					  filter: 'alpha(opacity=100)'				  
					},200,function() {
					  
					  $(".house-light-5").delay(1000).animate({
						opacity: '1',
						filter: 'alpha(opacity=100)'				  
					  },200,function() {
					
						$(".msg-prt1-mask").animate({
						  width:'445px'
						},2000,function() {
							  
						  $(".msg-prt2-mask").animate({
							width:'360px'
						  },2000,function() {
							  
							$(".santas-slay").delay(3000).animate({
							  opacity: '1',
							  filter: 'alpha(opacity=100)',
							  bottom:'0px',
							  right:'-400px',
							  height:'100%',
							  width:'100%'
							},10000,function() {
													
							  $(".paper-curl").animate({
								opacity: '1',
								filter: 'alpha(opacity=100)',
								height:'176px',
								width:'158px',
								bottom:'-22px',
								left:'518px'
							  },800, function() {
								  
								$("#ui").css('display','block');
								  
								$("#ui").delay(6000).animate({
								  opacity: '1',
								  filter: 'alpha(opacity=100)'
								},500);
								  
							  });
							
							}); 
						  
						  }); 
						
						});
						
					  }); 
					  
					});
				  
				  });
				  
				});
			  
			  });
				
			});
			   
		  });
			  
		}
		return false;
		
	});
	
	$('#ui a').click(function(){
		
		var container = $('#container');
		//var toLoad = $(this).attr('href')+' #container';
		//$('#container').hide('fast',loadContent);
		//$('#load').remove();
		$('#container').append('<span id="load">LOADING...</span>');
		//$('#load').fadeIn('normal');
		//window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			container.load("scene.php", hideLoader);
			//$('#container').load(toLoad,'',showNewContent())
		}
		loadContent();
		function showNewContent() {
			//$('#container').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
			$('#ui').css('display','none');
			$("#container").animate({
			  opacity: '1',
			  filter: 'alpha(opacity=100)',
			  height:'562px'
			},1000); 
			scene_ani();
		}
		
		function html5_audio(){
			var a = document.createElement('audio');
			return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
		}
		 
		var play_html5_audio = false;
		if(html5_audio()) play_html5_audio = true;
		 
		function play_sound(url){
			if(play_html5_audio){
				var snd = new Audio(url);
				snd.load();
				snd.play();
			}else{
				$("#sound").remove();
				var sound = $("<embed id='sound' type='audio/mpeg' />");
				sound.attr('src', url);
				sound.attr('loop', false);
				sound.attr('hidden', true);
				sound.attr('autostart', true);
				$('body').append(sound);
			}
		}
		
		play_sound('../ecard/sounds/N1.mp3');
		
		function scene_ani() {
			
		  function northern_lights() {
			 $(".northern-light-2").animate({opacity: '1',filter: 'alpha(opacity=100)',"left": "-450px","top": "500px"}, 20000, function() { 
				  //$(this).animate({"left": "580px","top": "100px"}, 25000) 
			  });
		  }
		  
		  var snow_fall = $(".snow-fall");
		  //var snow_fall_slow = $(".snow-fall-slow");
		  
		  $(".shooting-star").delay(6000).animate({
			opacity: '1',
			filter: 'alpha(opacity=100)',
			top:'700px',
			right:'700px'
		  },1000, northern_lights); 
		  
		  //play_sound('/ecard/sounds/N1.mp3');
		  
		  $('#scene').delay(2000).animate({
			top: '-622px'
		  }, 10000, function() {
			  
			var snow_fall = $(".snow-fall");
			/*  
			snow_fall_slow.delay(3000).imageScroller( {speed:'20000', direction:'bottom'} );
			snow_fall_slow.animate({
			  opacity: '1',
			  filter: 'alpha(opacity=100)'
			}, 3000);
			*/
			
			snow_fall.delay(3000).imageScroller( {speed:'9000', direction:'bottom'} );
			snow_fall.animate({
			  opacity: '1',
			  filter: 'alpha(opacity=100)'
			}, 3000, function() {
								
			  $(".house-light-1").animate({
				opacity: '1',
				filter: 'alpha(opacity=100)'				  
			  },200,function() {
			  
				$(".house-light-2").delay(1000).animate({
				  opacity: '1',
				  filter: 'alpha(opacity=100)'				  
				},200,function() {
				  
				  $(".tree-snow").animate({
					opacity: '0.8',
					filter: 'alpha(opacity=80)'				  
				  },2000,function() {
				
				  $(".tree-lights-small").animate({
					opacity: '1',
					filter: 'alpha(opacity=100)'				  
				  },1000);
				  $(".tree-lights-large").animate({
					opacity: '1',
					filter: 'alpha(opacity=100)'				  
				  },1000);
				  
				  });
				  
				  $(".house-light-3").delay(1000).animate({
					opacity: '1',
					filter: 'alpha(opacity=100)'				  
				  },200,function() {
					
					$(".house-light-4").delay(1000).animate({
					  opacity: '1',
					  filter: 'alpha(opacity=100)'				  
					},200,function() {
					  
					  $(".house-light-5").delay(1000).animate({
						opacity: '1',
						filter: 'alpha(opacity=100)'				  
					  },200,function() {
					
						$(".msg-prt1-mask").animate({
						  width:'445px'
						},2000,function() {
							  
						  $(".msg-prt2-mask").animate({
							width:'360px'
						  },2000,function() {
							  
							$(".santas-slay").delay(3000).animate({
							  opacity: '1',
							  filter: 'alpha(opacity=100)',
							  bottom:'0px',
							  right:'-400px',
							  height:'100%',
							  width:'100%'
							},10000,function() {
													
							  $(".paper-curl").animate({
								opacity: '1',
								filter: 'alpha(opacity=100)',
								height:'176px',
								width:'158px',
								bottom:'-22px',
								left:'518px'
							  },800, function() {
								  
								$("#ui").css('display','block');
								  
								$("#ui").delay(6000).animate({
								  opacity: '1',
								  filter: 'alpha(opacity=100)'
								},500);
								  
							  });
							
							}); 
						  
						  }); 
						
						});
						
					  }); 
					  
					});
				  
				  });
				  
				});
			  
			  });
				
			});
			   
		  });
			  
		}
		return false;
		
	});

});