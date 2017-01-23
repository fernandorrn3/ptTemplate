$(document).ready(function() {
	
	


	
	
	
	
	$("#1").click(function() {
	$('html, body').animate({scrollTop: 0}, 800);
	return false;
});
	
	
	
		$("#2").click(function() {
	$('html, body').animate({scrollTop: 558}, 800);
	return false;
});
	
	
		$("#3").click(function() {
	$('html, body').animate({scrollTop: 1428}, 800);
	return false;
});
	
	
		$("#4").click(function() {
	$('html, body').animate({scrollTop: 2487}, 800);
	return false;
});
	
	
	
	
		$("#5").click(function() {
	$('html, body').animate({scrollTop: 3051}, 800);
	return false;
});
	




 
	 






	
	
	









	
	
	function styleLink(){
	
	
	$("#1").css("color","#FFF")
	.css("border-left-style","groove")
	.css("border-radius","4px")

	
		$("#2").css("color","#FFF")
		.css("border-left-style","groove")
	    .css("border-radius","4px")

		
		
	$("#3").css("color","#FFF")
	.css("border-left-style","groove")
	.css("border-radius","4px")

	
	$("#4").css("color","#FFF")
	.css("border-left-style","groove")
	.css("border-radius","4px")

	
	$("#5").css("color","#FFF")
	.css("border-left-style","groove")
	.css("border-radius","4px")
					
					
					
	    $("#1").hover(function(){
        $(this).css("background-color", "rgba(0,0,0,0.5)")
        }, function(){
        $(this).css("background-color","transparent");
    });	
	
	
					
	    $("#2").hover(function(){
        $(this).css("background-color", "rgba(0,0,0,0.5)")
        }, function(){
        $(this).css("background-color","transparent");
    });	
	
	
					
	    $("#3").hover(function(){
        $(this).css("background-color", "rgba(0,0,0,0.5)")
        }, function(){
        $(this).css("background-color","transparent");
    });	
	
	
					
	    $("#4").hover(function(){
        $(this).css("background-color", "rgba(0,0,0,0.5)")
        }, function(){
        $(this).css("background-color","transparent");
    });	
	
	
					
	    $("#5").hover(function(){
        $(this).css("background-color", "rgba(0,0,0,0.5)")
        }, function(){
        $(this).css("background-color","transparent");
    });	
	
	
	}
	
	styleLink()
	
	
	
	function mudarLetras(){

  $('#t1').typeIt({
    speed: 200,
    lifeLike: false,
    autoStart: false,
	loop:true
	
	
  })
  
  .tiType('Olá Mundo!')
  .tiPause(1000)
  .tiDelete()
  .tiType('Hola Mundo!')
  .tiPause(1000)
  .tiDelete()
   .tiType('Hello World!')
   .tiPause(1000)

	}
	
	
	mudarLetras()
	
 
  

	$(window).scroll(function(){
		
		
		
	  
		   function navegacao(){
		   
		   
		   if($(window).scrollTop() > 75){
		$("#navegacao").addClass("navbar-fixed-top").css("background-color","rgba(105,105,105,1)");
	
		} 
		
		else {
			$("#navegacao").removeClass("navbar-fixed-top").css("background-color","transparent");
		}
		
		   }
		   navegacao()
		   
		   
		   
			   /*if($(window).scrollTop() <= 70){
				   $("#navegacao").hide()
			   }  
			   
			   
			   
			   
			   
			   if($(window).scrollTop() >= 70){
				   $("#navegacao").fadeIn("slow")
			   }  
			   
			   
			    else{
				    $("#navegacao").fadeIn("slow")
			   }
			 */
		   
		   
		
		   
	  
	   
	   
	   
		
		
	
	});
	
	
	
	
	
	
	
	
			if($(window).width() < 750){
				$("#navegacao").css("position","static")
			}
			
			
			
    
		
	 
if($(window).scrollTop() == 631 ){
	$("#2").css("background-color","red")
        
		

}

	
	
    
});