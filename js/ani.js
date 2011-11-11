$(document).ready(function() {

	  var northern_lights = function() {
		 $(".northern-light-2").animate({opacity: '1',filter: 'alpha(opacity=100)',"left": "-450px","top": "500px"}, 25000, function() { 
			  $(this).animate({"left": "580px","top": "100px"}, 25000) 
		  });
		 /*
		  $(".northern-light-1").delay(5000).animate({opacity: '1',filter: 'alpha(opacity=100)',"left": "580px","top": "300px"}, 25000, function() { 
			  $(this).animate({"left": "-450px","top": "500px"}, 25000) 
		  });
		  */
		  setTimeout(northern_lights, 50000);
	  }
	  northern_lights();
	  
	  var snow_fall = $(".snow-fall");
	  //var snow_fall_slow = $(".snow-fall-slow");

	  $(".shooting-star").delay(2000).animate({
		opacity: '1',
		filter: 'alpha(opacity=100)',
		top:'700px',
		right:'700px'
	  },1000); 

	  $('#scene').animate({
		top: '-600px'
	  }, 10000, function() {
		/*  
		snow_fall_slow.delay(3000).imageScroller( {speed:'20000', direction:'bottom'} );
		snow_fall_slow.animate({
		  opacity: '1',
		  filter: 'alpha(opacity=100)'
		}, 3000);
		*/
		snow_fall.imageScroller( {speed:'10000', direction:'bottom'} );
		snow_fall.animate({
		  opacity: '1',
		  filter: 'alpha(opacity=100)'
		}, 3000, function() {
			
	  
	  $(".santas-slay").delay(200).animate({
		opacity: '1',
		filter: 'alpha(opacity=100)',
		bottom:'350px',
		right:'700px',
		height:'100%',
		width:'100%'
	  },6000); 
		  		  
		  $(".house-light-1").animate({
			opacity: '1',
			filter: 'alpha(opacity=100)'				  
		  },200,function() {
		  
			$(".house-light-2").delay(1000).animate({
			  opacity: '1',
			  filter: 'alpha(opacity=100)'				  
			},200,function() {
			  
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
					
					$(".tree-snow").animate({
					  opacity: '0.8',
					  filter: 'alpha(opacity=80)'				  
					},10000,function() {
						  
					  $(".tree-lights-small").animate({
						opacity: '1',
						filter: 'alpha(opacity=100)'				  
					  },1000,function() {
						  
					  });
					  $(".tree-lights-large").animate({
						opacity: '1',
						filter: 'alpha(opacity=100)'				  
					  },1000,function() {
					
					
						$(".paper-curl").animate({
						  opacity: '1',
						  filter: 'alpha(opacity=100)',
						  height:'176px',
						  width:'158px',
						  bottom:'-562px',
						  left:'518px'
						},800,function() {
							
							
							
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
)