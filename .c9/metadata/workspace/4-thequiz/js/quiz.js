{"filter":false,"title":"quiz.js","tooltip":"/4-thequiz/js/quiz.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":30,"column":2},"end":{"row":121,"column":0},"action":"remove","lines":["questions: function(url) {","    var xhr = new XMLHttpRequest(); // skapa ett XMHL objekt","    xhr.onreadystatechange = function() {","       // Validerar  URl och status koden","      if (xhr.readyState === 4 && xhr.status === 200) {","        quizme.question = JSON.parse(xhr.responseText); // Javascript objekt","","        // Hämtar frågorna","        document.getElementById(\"questions\").innerHTML = quizme.question.question;","      }","      else { console.log(\"Läsfel, status: \" + xhr.status); }","","    };","","    xhr.open(\"GET\", url, true);","    xhr.send(null);","","","  },","","  post: function(input, url) {","","   var xhrP = new XMLHttpRequest();","    xhrP.onreadystatechange = function() {","      if (xhrP.readyState === 4) {","        var Myanswer = JSON.parse(xhrP.responseText);","","","        // Clear the input field","        quizme.input.value = \"\";","        var message = document.getElementById(\"message\");","","        if (Myanswer.message === \"Correct answer!\") {","","          if (Myanswer.nextURL !== undefined) {","            message.innerHTML = Myanswer.message;","            quizme.guessArr.push(quizme.guess);","            quizme.guess = 0;","            quizme.questions(Myanswer.nextURL);","          }","          else {","            // ","            message.innerHTML = \"Number of guesses\";","            quizme.guessArr.push(quizme.guess);","            ","            for (var i = 0; i < quizme.guessArr.length; i+=1) {","              var p = document.createElement(\"p\");","             // p.innerHTML = \"question \" + [i + 1] + \": \" + quizme.guessArr[i];","             p.textContent = \"question \" + [i + 1] + \": \" + quizme.guessArr[i];","               //var message = document.getElementById(\"message\");","               message.appendChild(p);","            }","          }","","        }","        else if (Myanswer.message === \"Wrong answer! :\") {","          message.innerHTML = Myanswer.message;","          quizme.guess += 1;","        }","      }","","    };","","    xhrP.open('POST', url, true);","    xhrP.setRequestHeader('Content-Type', 'application/json');","","    var data = {","      \"Myanswer\": input","    };","    console.log(data);","","    // send the collected data as JSON","    xhrP.send(JSON.stringify(data));","","  }","","};","","window.onload = quizme.init;","","","","","","","","","","","","",""]}]}]]},"ace":{"folds":[],"scrolltop":203.6362829208374,"scrollleft":0,"selection":{"start":{"row":30,"column":2},"end":{"row":30,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":true,"wrapToView":false},"firstLineState":{"row":13,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1420586052997,"hash":"0ba324b71c6d002acda832414213ec23295721bb"}