"use strict";

// my object
var quizme = {


  
  input:  document.getElementById("input"),
  quizArr: [],
  quiz: 0,
  question: null,

  init: function() {

    // Hämta knappen
    document.getElementById("send").addEventListener("click", function() {
      quizme.post(quizme.input.value, quizme.question.nextURL);
    });

    // Använd keyboard
    quizme.input.addEventListener("keydown", function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        quizme.post(quizme.input.value, quizme.question.nextURL);
      }
    });

    quizme.questions("http://vhost3.lnu.se:20080/question/1"); //URL
  },

  questions: function(url) {
    var xhr = new XMLHttpRequest(); // skapa ett XMHL objekt
    xhr.onreadystatechange = function() {
       // Validerar  URl och status koden
      if (xhr.readyState === 4 && xhr.status === 200) {
        quizme.question = JSON.parse(xhr.responseText); // Javascript objekt

        // Hämtar frågorna
        document.getElementById("questions").innerHTML = quizme.question.question;
      }
      else { console.log("Läsfel, status: " + xhr.status); }

    };

    xhr.open("GET", url, true);
    xhr.send(null);


  },

  post: function(input, url) {

   var xhrP = new XMLHttpRequest();
    xhrP.onreadystatechange = function() {
      if (xhrP.readyState === 4) {
        var Myanswer = JSON.parse(xhrP.responseText);


        // Clear the input field
        quizme.input.value = "";
        var message = document.getElementById("message");

        if (Myanswer.message === "Correct answer!") {

          if (Myanswer.nextURL !== undefined) {
            message.innerHTML = Myanswer.message;
            quizme.guessArr.push(quizme.guess);
            quizme.guess = 0;
            quizme.questions(Myanswer.nextURL);
          }
          else {
            // 
            message.innerHTML = "Number of guesses";
            quizme.guessArr.push(quizme.guess);
            
            for (var i = 0; i < quizme.guessArr.length; i+=1) {
              var p = document.createElement("p");
             // p.innerHTML = "question " + [i + 1] + ": " + quizme.guessArr[i];
             p.textContent = "question " + [i + 1] + ": " + quizme.guessArr[i];
               //var message = document.getElementById("message");
               message.appendChild(p);
            }
          }

        }
        else if (Myanswer.message === "Wrong answer! :") {
          message.innerHTML = Myanswer.message;
          quizme.guess += 1;
        }
      }

    };

    xhrP.open('POST', url, true);
    xhrP.setRequestHeader('Content-Type', 'application/json');

    var data = {
      "Myanswer": input
    };
    console.log(data);

    // send the collected data as JSON
    xhrP.send(JSON.stringify(data));

  }

};

window.onload = quizme.init;






















