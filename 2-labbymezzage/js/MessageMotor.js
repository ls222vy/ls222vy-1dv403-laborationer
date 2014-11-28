"use strict";
/*global Message*/


var MessageMotor = {
   
 messages: [],
    
   
   init: function(){
       // Hämtar html document
       var button = document.getElementById("submitInput");
       var texta = document.getElementById("textInput");
       
       //Skapa händelse och validerar om(nummer 13 är enterkey)
       
       texta.addEventListener ("keypress", function(e){
         
           if(!e){ e = window.event;
           }
           
           if (e.shiftKey){
           
           }
           
           else if(e.keyCode == 13) {
               event.preventDefault();// Hindra formularet från att skicka till servern.
              newMessage();
           }
       });
       
       button.onclick = newMessage;
       
       // Skapa meddelande
      
       function newMessage(){
           MessageMotor.messages.push(new Message (texta.value, new Date())); //push metoden lägger till  en ny post
           
           MessageMotor.renderMessages();
           texta.value ="";
       }
     
    },
    
        renderMessages: function(){
      // Antal Meddelande eller countingMessages
      
       var count = document.getElementById("count");
       count.innerHTML ="Antal meddelande: " + MessageMotor.messages.length;
       
       //Raderar alla befintliga meddelanden på sidan och skriv ut samtliga meddelande i arrayen
       
       document.getElementById("myMessages").innerHTML = "";
       
       for (var i = 0; i < MessageMotor.messages.length; i+=1){
           
           MessageMotor.renderMessage(i);
       }
    },
    
       renderMessage: function (messageID) {
       
       //Hämtar specifikt meddelande (messageID)(Message text) och lägg i en "p" tagg
       
      var text = document.createElement("p"),
       //Div som ska hämta
      myMessages = document.getElementById("myMessages"),
    
     
      
       
    // Skapa en div där ett meddelande ska samlas och utskrift
    
     aMessage = document.createElement("div");
     aMessage.classname = "myMessage";
     text.innerHTML = MessageMotor.messages[messageID].getHTMLText();
     myMessages.appendChild(aMessage);
     aMessage.appendChild(text);
     
      
       //Sätter tiden meddelandet
       
      var messageTime = document.createElement("footer");
      messageTime.innerHTML= MessageMotor.messages[messageID].getText();
      aMessage.appendChild(messageTime);
   
     //console.log( MessageMotor.messages[messageID]);
      //messageTime.innerHTML = MessageMotor.messages[messageID].getText().toLocaleTimeString();
       
       //Knapp för raderar meddelande
      var messageRemove = document.createElement("a");
       messageRemove.className = "messageRemove";
       messageRemove.href = "#";
       
       messageRemove.onclick = function(){
        if(confirm("Är du säker på att du vill ta bort meddelande?")){
         MessageMotor.removeMessage(messageID);
         aMessage.appendChild(messageRemove);
         
          }
      
        };
    
    
       //Lägger till knapp för tiden
        var messageDateTime = document.createElement("a");
        messageDateTime.className = "messageTime";
        messageDateTime.href = "#";
        
        messageDateTime.onclik = function (){
         console.log(MessageMotor.messages[messageID].getDateText().toLocaleTimeString());
         aMessage.appendChild(messageDateTime);
        };
   
       }
        
};




     
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
