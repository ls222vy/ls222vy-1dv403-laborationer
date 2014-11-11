"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
	// Kollar om formatet är rätt inmata YYY-MM-DD annars kastar undantag
	var todaysDate = new Date() ;
		var yourBirthday = new Date(date);
		var numbersOfDays;


		if(isNaN(yourBirthday))
	{
		 throw {'message' : "ej giltigt datum."};
	}
	
	if ( todaysDate < yourBirthday ){
	
		throw {'message': "Du är ej född."};
	}



		yourBirthday.getFullYear(todaysDate.getFullYear());
		todaysDate.getDate(todaysDate.getDate() -1);
	

		
		 if (todaysDate > yourBirthday ){
		 
		 	yourBirthday.setFullYear(todaysDate.getFullYear()+1);
		 }
 	
 	  numbersOfDays = Math.floor((yourBirthday - todaysDate) / (1000*60*60*24));
		
		 return	numbersOfDays;
			
			
			
			
 	
	
								// Din kod här.
	};
	
	
				

	
	
	
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};