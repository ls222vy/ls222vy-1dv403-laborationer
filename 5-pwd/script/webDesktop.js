"use strict";

 var webDesktop = {
     
     init: function (){
        // var menuButton = document.getElementById("click");
         
         //en reset-knapp för att återställa bakgrunden
       //  var resetButton = document.getElementById("reset");
        // var buttonUrl = "css/background/dotted1.png";
         
        // webDesktop.changeBackground(buttonUrl, resetButton);
         
         //Gör den till en knapp
         
        // menuButton.onclick = function(){
             var desktop = document.getElementById("desktop");
             
             //Validerar eller kollar om ett fönster finns. hindrar att fler skapas.
             
             if (desktop.firstElementchild){
                 return false;
             }
         }
     }
 
 
 window.onload = webDesktop.init