"use strict";
/*global Message*/


var MessageMotor = {
   
 messages: [],
    
   
   init: function(){
       
       var button = document.getElementById("submitInput");
       var texta = document.getElementById("textInput");
       
       //Skapa händelse och radbryttning
       
       texta.addEventListener ("keypress", function(e){
         
           if(!e){ e = event;
           }
           
           if (e.shiftKey){
           
           }
           
           else if(e.keyCode == 13) {
               event.preventDefault();
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
       
      
       document.getElementById("myMessages").innerHTML = "";
       
       for (var i = 0; i < MessageMotor.messages.length; i+=1){
           
           MessageMotor.renderMessage(i);
       }
    },
    
       renderMessage: function (messageID) {
       
       //Hämtar specifikt meddelande (messageID) och lägg i en "p" tagg
       
      var text = document.createElement("p"),
       //Div som ska hämta
      myMessages = document.getElementById("myMessages"),
    
     
      
       
    // Skapa en div där ett meddelande ska samlas ock skrift
    
     labbMessage = document.createElement("div");
     labbMessage.classname = "myMessage";
     text.innerHTML = MessageMotor.messages[messageID].getHTMLText();
     myMessages.appendChild(labbMessage);
     labbMessage.appendChild(text);
     
      
       //Sätter tiden meddelandet
       
      var messageTime = document.createElement("footer");
      messageTime.innerHTML= MessageMotor.messages[messageID].getDate().toLocaleTimeString();
      labbMessage.appendChild(messageTime);
      
    
        //Knapp för raderar meddelande
      var messageDelete = document.createElement("a");
       messageDelete.className = "messageDelete";
       messageDelete.href = "#";
        labbMessage.appendChild(messageDelete);
      
      
        messageDelete.onclick = function(){
       
        if(confirm("Är du säker på att du vill ta bort meddelande?")){
         MessageMotor.messageDelete(messageID);
        
        }
       
        
        };
        
       //Lägger till knapp för att radera
        var messageDateTime = document.createElement("a");
        messageDateTime.className = "messageTime";
        messageDateTime.href = "#";
        labbMessage.appendChild(messageDateTime);
        
        //När man klickar klockan images den visan Datum,Månad, timme,minuter och segunder
         
         messageDateTime.onclick = function (){
         alert (MessageMotor.messages[messageID].getDateText());
         
       
        };
     
       },
         // Raderar meddelande(splice = metoden lägger / tar bort objekt till / från en array och returnerar den borttagna objekt.)
            messageDelete:function(messageID){
            MessageMotor.messages.splice(messageID, 1);
            MessageMotor.renderMessages();
       }
      
         
};

     


     
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
