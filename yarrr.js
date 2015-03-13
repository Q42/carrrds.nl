		$(document).ready(function(){



     var p = $("#navbar").offset().top;

    $(window).scroll(function(){
        if(p<$(window).scrollTop()){
            console.log("div reached");
            $("#navbar").css({position:"fixed",top:0});
            $('header').css({
              	"margin-bottom": "75px"
              });
        }
        else{
            console.log("div out");
            $("#navbar").css({position:"static"});
               $('header').css({
              	"margin-bottom": "0"
              });
        }

    })




 $("#aboutgamecards").css(
								    	{
								    		"width":  "410px",
								    		"top": "125px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds231.png');   
	 $('#card2').attr('src','images/cards/carrrds232.png');
	 $('#card3').attr('src','images/cards/carrrds233.png');
	 $('#card4').attr('src','images/cards/carrrds234.png');   
	 	  	   $(".card2").show();
	  $(".card3").show();
	  $(".card4").show();
	  $(".card5").hide();
	  $(".card6").hide();     


$("#swordicon").click(function(){

       	$( "#descrtitle" ).replaceWith( '<div id="descrtitle"><h2 lang="en">Sword / Swordmaster</h2><h2 lang="nl" >Zwaard / Zwaardmeester</h2></div>');
 		
 		$( "#description" ).replaceWith('<div id="description"><p lang="en">Every pirate should have a sword! Yarrr! Sword cards allow you to decline when someone asks you for an island you have. By playing the sword at that moment youll start a duel. If you win the duel, its your turn AND you keep the card!</p><p lang="nl">Wat is een piraat nou zonder zwaard? Door een zwaard te spelen kun je nee zeggen tegen iemand die aan jou een eiland kaart vraagt. </p></div>');
		
		$('#actioncard').attr('src','images/sword.png');   
		$('#piratecard').attr('src','images/swordmaster.png');   
    });


$("#gunicon").click(function(){
        $( "#descrtitle" ).replaceWith( '<div id="descrtitle"><h2 lang="en">Gun / Gunslinger</h2><h2 lang="nl" >Pistool / SchietVrouw:D</h2></div>');
 		
 		$( "#description" ).replaceWith('<div id="description"><p lang="en">By playing a gun card you can either force someone to give you an island or end a duel in your favor.</p><p lang="nl">Door een pistool kaart te spelen kun je iemand dwingen jou een kaart te geven of een duel beeindigen in jou voordeel.</p></div>');

        $('#actioncard').attr('src','images/gun.png');   
		$('#piratecard').attr('src','images/Gunslinger.png');   
    });

$("#flagicon").click(function(){
         $( "#descrtitle" ).replaceWith( '<div id="descrtitle"><h2 lang="en">Flag / Captain Flaggers</h2><h2 lang="nl" >Vlag / Kapitein Vlag</h2></div>');
 		
 		$( "#description" ).replaceWith('<div id="description"><p lang="en">Play this card during your turn and only ask for the colour of a card. You dont even have to have that colour in your hand!</p><p lang="nl">Speel hem tijdens je beurt en vraag alleen om de kleur van een kaart. Die kleur hoef je niet zelf te hebben!</p></div>');
            $('#actioncard').attr('src','images/Flag.png');   
		$('#piratecard').attr('src','images/Flagdude.png');   
    });

$("#parroticon").click(function(){
          $( "#descrtitle" ).replaceWith( '<div id="descrtitle"><h2 lang="en">Parrot / Thief</h2><h2 lang="nl" >Papegaai / Dief</h2></div>');
 		
 		$( "#description" ).replaceWith('<div id="description"><p lang="en">You play this card only when its not your turn. Steal the card thats changing owners and immediately start your turn. But wach out! The parrot can be show down by a gun.</p><p lang="nl">Deze kaart speel je buiten je beurt. Steel de kaart die van eigenaar wisselt en begin direct jouw beurt. Maar pas op! Je papegaai kan uit de lucht geschoten worden met een pistool.</p></div>');
            $('#actioncard').attr('src','images/parrot.png');   
		$('#piratecard').attr('src','images/Thief.png');   
    });

$("#voodooicon").click(function(){
       $( "#descrtitle" ).replaceWith( '<div id="descrtitle"><h2 lang="en">Voodoo doll / Voodoo Lady</h2><h2 lang="nl" >Voodoo pop / Voodoo vrouw</h2></div>');
 		
 		$( "#description" ).replaceWith('<div id="description"><p lang="en">You can play this card anytime - even when its not your turn. Pick a fellow player who must skip his or her turn.</p><p lang="nl">Deze kaart mag je tijdens of buiten je beurt spelen. Kies een medespeler die zijn beurt moet overslaan.</p></div>');
            $('#actioncard').attr('src','images/Voodoo.png');   
		$('#piratecard').attr('src','images/voodoolady.png');   
    });

$("#coinicon").click(function(){
        $( "#descrtitle" ).replaceWith( '<div id="descrtitle"><h2 lang="en">Captain Crow</h2><h2 lang="nl" >Kapitein Gier</h2></div>');
 		
 		$( "#description" ).replaceWith('<div id="description"><p lang="en">This pirate is the richest pirate of the seven seas. When the game is over you get one extra coin!</p><p lang="nl">Kapitein Gier is de rijkste piraat van de zeven zeen. Aan het einde van het spel krijg je een extra munt!</p></div>');
            $('#actioncard').attr('src','images/cards/carrrds247.png');   
		$('#piratecard').attr('src','images/coindude.png');   
		
    });
 
    


$(".link1").click(function(){
	$('#target1').ScrollTo({duration:1000});
});
$(".link2").click(function(){
	$('#target2').ScrollTo({duration:1000});
});
$(".link3").click(function(){
	$('#target3').ScrollTo({duration:1000});
});
$(".link4").click(function(){
	$('#target4').ScrollTo({duration:1000});
});
$(".link5").click(function(){
	$('#target5').ScrollTo({duration:1000});
});
$(".link6").click(function(){
	$('#target6').ScrollTo({duration:1000});
});
$(".buynow").click(function(){
	$('#target6').ScrollTo({duration:1000});
});


$(window).bind('scroll', function() {
         if ($(window).scrollTop() > 3250) {
            
             $("#flyingparrot").css(
								    	{
								    		"-webkit-transform":  "translateX(0) rotateZ(10deg)",
								    		"opacity": "1"
								    	});	
         }
         else {
         	    $("#flyingparrot").css(
								    	{
								    		"-webkit-transform":  "translateX(500px) rotateZ(0deg)",
								    		"opacity": "0"
								    	});	
           
         }
    });



$(window).bind('scroll', function() {
         if ($(window).scrollTop() > 3950) {
            
             $("#gunslingeranim").css(
								    	{
								    		"-webkit-transform":  "translateY(0) rotateZ(0deg)",
								    		"opacity": "1"
								    	});	
         }
         else {
         	    $("#gunslingeranim").css(
								    	{
								    		"-webkit-transform":  "translateY(500px) rotateZ(-10deg)",
								    		"opacity": "0"
								    	});	
           
         }
    });


$("#card-purple").click(function(){
	 $("#aboutgamecards").css(
								    	{
								    		"width":  "410px",
								    		"top": "125px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds231.png');   
	 $('#card2').attr('src','images/cards/carrrds232.png');
	 $('#card3').attr('src','images/cards/carrrds233.png');
	 $('#card4').attr('src','images/cards/carrrds234.png');   
	 	  	   $(".card2").show();
	  $(".card3").show();
	  $(".card4").show();
	  $(".card5").hide();
	  $(".card6").hide();     
	
});

$("#card-green").click(function(){
	 $("#aboutgamecards").css(
								    	{
								    		"width":  "410px",
								    		"top": "125px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds256.png');   
	 $('#card2').attr('src','images/cards/carrrds257.png');
	 $('#card3').attr('src','images/cards/carrrds258.png');
	 $('#card4').attr('src','images/cards/carrrds259.png');   
	 	  	   $(".card2").show();
	  $(".card3").show();
	  $(".card4").show();
	  $(".card5").hide();
	  $(".card6").hide();     
	
});

$("#card-pink").click(function(){
	 $("#aboutgamecards").css(
								    	{
								    		"width":  "410px",
								    		"top": "125px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds252.png');   
	 $('#card2').attr('src','images/cards/carrrds253.png');
	 $('#card3').attr('src','images/cards/carrrds254.png');
	 $('#card4').attr('src','images/cards/carrrds255.png');   
	 	  	   $(".card2").show();
	  $(".card3").show();
	  $(".card4").show();
	  $(".card5").hide();
	  $(".card6").hide();     
	
});
$("#card-orange").click(function(){
	 $("#aboutgamecards").css(
								    	{
								    		"width":  "410px",
								    		"top": "125px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds227.png');   
	 $('#card2').attr('src','images/cards/carrrds228.png');
	 $('#card3').attr('src','images/cards/carrrds229.png');
	 $('#card4').attr('src','images/cards/carrrds230.png');  
	  	   $(".card2").show();
	  $(".card3").show();
	  $(".card4").show();
	  $(".card5").hide();
	  $(".card6").hide();     
	
});
$("#card-red").click(function(){
	 $("#aboutgamecards").css(
								    	{
								    		"width":  "615px",
								    		"top": "225px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds235.png');   
	 $('#card2').attr('src','images/cards/carrrds236.png');
	 $('#card3').attr('src','images/cards/carrrds237.png');  
	  	   $(".card2").show();
	  $(".card3").show();
	  $(".card4").hide();
	  $(".card5").hide();
	  $(".card6").hide();   
	
});
$("#card-white").click(function(){
	 $("#aboutgamecards").css(
								    	{
								    		"width":  "615px",
								    		"top": "225px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds238.png');   
	 $('#card2').attr('src','images/cards/carrrds239.png');
	 $('#card3').attr('src','images/cards/carrrds240.png');   
	  	   $(".card2").show();
	  $(".card3").show();
	  $(".card4").hide();
	  $(".card5").hide();
	  $(".card6").hide();  
	
});
$("#card-blue").click(function(){
	 $("#aboutgamecards").css(
								    	{
								    		"width":  "615px",
								    		"top": "225px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds260.png');   
	 $('#card2').attr('src','images/cards/carrrds261.png');
	 $('#card3').attr('src','images/cards/carrrds262.png'); 
	 	   $(".card2").show();
	  $(".card3").show();
	  $(".card4").hide();
	  $(".card5").hide();
	  $(".card6").hide();  
	
});
$("#card-yellow").click(function(){
	 $("#aboutgamecards").css(
								    	{
								    		"width":  "615px",
								    		"top": "125px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds241.png');   
	 $('#card2').attr('src','images/cards/carrrds242.png');
	 $('#card3').attr('src','images/cards/carrrds243.png'); 
	 $('#card4').attr('src','images/cards/carrrds244.png');   
	 $('#card5').attr('src','images/cards/carrrds245.png');
	 $('#card6').attr('src','images/cards/carrrds246.png');     
	   $(".card2").show();
	  $(".card3").show();
	  $(".card4").show();
	  $(".card5").show();
	  $(".card6").show();
	
});
$("#card-grey").click(function(){
	 $("#aboutgamecards").css(
								    	{
								    		"width":  "410px",
								    		"top": "225px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds250.png');   
	 $('#card2').attr('src','images/cards/carrrds251.png');
	 $(".card2").show();
	  $(".card3").hide();
	  $(".card4").hide();
	  $(".card5").hide();
	  $(".card6").hide();
  
	
});
$("#card-black").click(function(){
	 $("#aboutgamecards").css(
								    	{
								    		"width":  "410px",
								    		"top": "225px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds248.png'); 
	 $('#card2').attr('src','images/cards/carrrds249.png');

	   $(".card2").show();
	  $(".card3").hide();
	  $(".card4").hide();
	  $(".card5").hide();
	  $(".card6").hide();
  
	
});
$("#card-brown").click(function(){
	 $("#aboutgamecards").css(
								    	{
								    		"width":  "210px",
								    		"top": "225px"
								    	
								    	});	
	 $('#card1').attr('src','images/cards/carrrds247.png'); 
	  $(".card2").hide();
	  $(".card3").hide();
	  $(".card4").hide();
	  $(".card5").hide();
	  $(".card6").hide();

  
	
});




$("#flag-nl").click(function(){
document.body.className='nl'
});

$("#flag-en").click(function(){
document.body.className='en'
});

	});