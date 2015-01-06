"use strict";

 var webDesktop = {
     
     init: function (){
         var menuButton = document.getElementById("click");
       
         
         //Gör den till en knapp
         
         menuButton.onclick = function(){
             var desktop = document.getElementById("desktop");
             
             //Validerar eller kollar om ett fönster finns. hindrar att fler skapas.
             
             if (desktop.firstElementchild){
                 return false;
             }
             
            
             var imageFolder = document.createElement("div");
             imageFolder.id="imgFolder";
             
             
             var top = document.createElement("div");
             top.id ="top";
             
             var topImage = document.createElement("img");
             topImage.className = "topImage";
             topImage.setAttribute("src", "pics/windowicon.png");
             
             var topText = document.createElement("span");
             topText.id = "folderText";
             topText.appendChild(document.createTextNode("image Viewer"));
             
             var topClose = document.createElement("a");
             topClose.className = "topClose";
             topClose.setAttribute("href", "#");
             
             //Stäng-knappen för fönstret
             
             topClose.onclick = function(){
              desktop.removeChild(imageFolder);
              
             }
             
             var closeImg = document.createElement("img");
             closeImg.setAttribute("src", "pics/windowclose.png");
             
             var picContainer = document.createElement("div");
             picContainer.id = "picContainer";
             
             var bottom = document.createElement("div");
             bottom.id = "bottom";
             
             var loader = document.createElement("img");
             loader.setAttribute("src", "pics/loader.gif");
             
             desktop.appendChild(imageFolder);
             imageFolder.appendChild(top);
             top.appendChild(topImage);
             top.appendChild(topText);
             top.appendChild(topClose);
             imageFolder.appendChild(picContainer);
             imageFolder.appendChild(bottom);
             bottom.appendChild(loader);
             
             var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
             
           //   new AjaxCon(url,function (data)){
               
               //Ta bort laddning-gif när anropet är färdigt.
               bottom.removeChild(loader);
               
               var images = JSON.parse (data);
               //Funktionen kollar vilket tummnagel som är störst.
               
              
             }
             
             
             
         }
     }
 };
 
     
 
 
 window.onload = webDesktop.init;