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

  









