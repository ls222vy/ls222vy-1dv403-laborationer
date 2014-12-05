"use strict";


var Memory = {
 
cardLocation: [],
cardWant:[],
rows: 2,
cols: 2,
swapCount:0,
 win: 0,
noOfTries:0,
 
 init:function(){
   //
  //var rows = 4;
  // var cols = 4;
    
     Memory.cardLocation =  RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
     console.log(Memory.cardLocation);
     
     Memory.createTable(Memory.rows,Memory.cols);
 },
 
 createTable: function(rows,cols){
     
     var memoryGame = document.getElementById("memoryTable"); //memoryTable = id
     var table = document.createElement("table");
     var cardNumber = 0;
     
     memoryGame.appendChild(table);
     
     for (var row = 0; row < rows; row++ ){
         var tr = document.createElement("tr");
         table.appendChild(tr);
         
     for( var col = 0; col < cols; col++){
         var td = document.createElement("td");
         tr.appendChild(td);
         
         var a = document.createElement("a");
         a.href = "#";
         td.appendChild(a);
         
         var img = document.createElement("img");
         img.src = "memory/pics/0.png";
         a.appendChild(img);
        
         Memory.swapBrick(cardNumber,a);
         
         cardNumber += 1;
         
         
     }     
         
     }
 },
 
        swapBrick:function(brickNumber,pic){
         pic.onclick = function (){
          var img = pic.getElementsByTagName("img")[0];
          
          if(img.getAttribute("src") !== "memory/pics/0.png"){
           
              return;
      }
      
        Memory.swapCount +=1;
        
        if(Memory.swapCount == 2 || Memory.swapCount == 1) {
         
         img.src = "memory/pics/" + Memory.cardLocation[brickNumber] + ".png";
         Memory.cardWant.push(img);
         
         }
        else {
          return;
        }
       if (Memory.swapCount == 2) {
        
         Memory.noOfTries += 1;
         
         setTimeout (function (){
          console.log(Memory.cardWant[0].getAttribute("src") === Memory.cardWant[1].getAttribute("src"));
          if(Memory.cardWant[0].getAttribute("src") === Memory.cardWant[1].getAttribute("src")){
         // console.log( Memory.rows);
          //console.log(Memory.cols / 2);
       //console.log(Memory.win);
       //console.log( Memory.rows * Memory.cols / 2);
               Memory.win += 1;
             
               if (Memory.win === Memory.rows * Memory.cols / 2){
               
               var p = document.createElement("p"); 
                p.textContent = "Grattis, du vann på " + Memory.noOfTries + " försök.";
                 var memoryGame = document.getElementById("memoryTable");
                 memoryGame.appendChild(p);
               }
           
          }
          else {
           
           Memory.cardWant[0].setAttribute("src","memory/pics/0.png");
           Memory.cardWant[1].setAttribute("src","memory/pics/0.png");
          }
          
            Memory.cardWant = [];
            Memory.swapCount = 0;
          
         }, 1000);
       }
     };
     
     
    }
};

window.onload = Memory.init;











































































































































































































































































