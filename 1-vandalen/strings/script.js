"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		
	
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 

	if (isNaN(str)){
		var newLine = "";
		var i;	
			for ( i = 0; i < str.length; i+=1){
				
				if(str[i] == str[i].toLowerCase() ){
					newLine += str[i].replace("a", "#").toUpperCase();
				}
			else{
					newLine += str[i].replace("A", "#").toLowerCase();
				}
				
	}
			return [newLine];
		}
		else {
		return ["Tyvärr inmatning är fel, det går inte att skriva siffror."];
		}
};


// var i;
 //var text = "";
  // Plats för förändring.  
  // Returnera den konverterade strängen.
  // Vid fel, kasta ett undantag med ett meddelande till användaren. 
 
 //for(i = 0; i < str.length; i += 1){
  
 // if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 || str.charCodeAt(i) > 195 && str.charCodeAt(i) < 215){
  
 // text = text + str.charCodeAt[i].replace("A","#").toLowerCase();
 // }
 // else {
  //text = text + str.charCodeAt[i].replace("a","#").toUpperCase();
 // }
 
 //}
//	return (str);
//}
//else {
 //  return ("Felmeddelande");
 // }



	
	
	
	
	
	
	
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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};


