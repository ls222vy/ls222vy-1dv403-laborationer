{"changed":true,"filter":false,"title":"script.js","tooltip":"/1-vandalen/strings/script.js","value":"\"use strict\";\n\nwindow.onload = function(){\n\n\t// I denna funktion ska du skriva koden för att hantera \"spelet\"\n\tvar convertString = function(str){\n\t\t\n\t\n\t\t// Plats för förändring.\t\t\n\t\t// Returnera den konverterade strängen.\n\t\t// Vid fel, kasta ett undantag med ett meddelande till användaren. \n\n\tif (isNaN(str)){\n\t\tvar newLine = \"\";\n\t\tvar i;\t\n\t\t\tfor ( i = 0; i < str.length; i+=1){\n\t\t\t\t\n\t\t\t\tif(str[i] == str[i].toLowerCase() ){\n\t\t\t\t\tnewLine += str[i].replace(\"a\", \"#\").toUpperCase();\n\t\t\t\t}\n\t\t\telse{\n\t\t\t\t\tnewLine += str[i].replace(\"A\", \"#\").toLowerCase();\n\t\t\t\t}\n\t\t\t\t\n\t}\n\t\t\treturn [newLine];\n\t\t}\n\t\telse {\n\t\treturn [\"Tyvärr inmatning är fel, det går inte att skriva siffror.\"];\n\t\t}\n};\n\n\n// var i;\n //var text = \"\";\n  // Plats för förändring.  \n  // Returnera den konverterade strängen.\n  // Vid fel, kasta ett undantag med ett meddelande till användaren. \n \n //for(i = 0; i < str.length; i += 1){\n  \n // if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 || str.charCodeAt(i) > 195 && str.charCodeAt(i) < 215){\n  \n // text = text + str.charCodeAt[i].replace(\"A\",\"#\").toLowerCase();\n // }\n // else {\n  //text = text + str.charCodeAt[i].replace(\"a\",\"#\").toUpperCase();\n // }\n \n //}\n//\treturn (str);\n//}\n//else {\n //  return (\"Felmeddelande\");\n // }\n\n\n\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t// ------------------------------------------------------------------------------\n\n\n\t// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra\n\tvar p = document.querySelector(\"#value\"); // Referens till DOM-noden med id=\"#value\"\n\tvar input = document.querySelector(\"#string\");\n\tvar submit = document.querySelector(\"#send\");\n\n\t// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.\n\tsubmit.addEventListener(\"click\", function(e){\n\t\te.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.\n\n\t\tp.classList.remove( \"error\");\n\n\t\ttry {\n\t\t\tvar answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen \"convertString\"\n\t\t\tp.innerHTML = answer;\t\t// Skriver ut texten från arrayen som skapats i funktionen.\t\n\t\t} catch (error){\n\t\t\tp.classList.add( \"error\"); // Växla CSS-klass, IE10+\n\t\t\tp.innerHTML = error.message;\n\t\t}\n\t\n\t});\n\n\n\n};\n\n\n","undoManager":{"mark":97,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":37,"column":2},"end":{"row":37,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":1},"end":{"row":39,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":2},"end":{"row":39,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":1},"end":{"row":41,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":2},"end":{"row":41,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":1},"end":{"row":42,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":2},"end":{"row":42,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":1},"end":{"row":43,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":2},"end":{"row":43,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":2},"end":{"row":44,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":3},"end":{"row":44,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":1},"end":{"row":45,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":2},"end":{"row":45,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":1},"end":{"row":47,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":2},"end":{"row":47,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":48,"column":0},"end":{"row":48,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":48,"column":1},"end":{"row":48,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":49,"column":0},"end":{"row":49,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":49,"column":1},"end":{"row":49,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":0},"end":{"row":50,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":1},"end":{"row":50,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":1},"end":{"row":51,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":2},"end":{"row":51,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":52,"column":1},"end":{"row":52,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":52,"column":2},"end":{"row":52,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":52,"column":2},"end":{"row":52,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":52,"column":2},"end":{"row":52,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":1},"end":{"row":12,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":4},"end":{"row":13,"column":5}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":3},"end":{"row":13,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":2},"end":{"row":13,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":3},"end":{"row":15,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":2},"end":{"row":15,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":4},"end":{"row":17,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":3},"end":{"row":17,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":4},"end":{"row":18,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":3},"end":{"row":18,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":4},"end":{"row":19,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":3},"end":{"row":19,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":5},"end":{"row":20,"column":6}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":4},"end":{"row":20,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":3},"end":{"row":20,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":5},"end":{"row":21,"column":6}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":4},"end":{"row":21,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":22,"column":4},"end":{"row":22,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":22,"column":3},"end":{"row":22,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":3},"end":{"row":24,"column":4}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":2},"end":{"row":24,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":1},"end":{"row":24,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":3},"end":{"row":25,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":2},"end":{"row":25,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":26,"column":2},"end":{"row":26,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":26,"column":1},"end":{"row":26,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":2},"end":{"row":27,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":1},"end":{"row":27,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":28,"column":4},"end":{"row":28,"column":5}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":28,"column":3},"end":{"row":28,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":28,"column":2},"end":{"row":28,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":2},"end":{"row":29,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":1},"end":{"row":29,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":55,"column":0},"end":{"row":55,"column":2}},"text":"};"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":30,"column":0},"end":{"row":30,"column":2}},"text":"};"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":30,"column":2},"end":{"row":31,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":0},"end":{"row":32,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":37},"end":{"row":15,"column":38}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":37},"end":{"row":15,"column":38}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":38},"end":{"row":15,"column":39}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":1},"end":{"row":12,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":1},"end":{"row":24,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":2},"end":{"row":24,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":2},"end":{"row":24,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":1},"end":{"row":24,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":1},"end":{"row":12,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":1},"end":{"row":12,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":26,"column":1},"end":{"row":26,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":26,"column":2},"end":{"row":26,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":26,"column":2},"end":{"row":26,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":26,"column":1},"end":{"row":26,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":1},"end":{"row":12,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":1},"end":{"row":12,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":1},"end":{"row":12,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":2},"end":{"row":14,"column":3}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":3},"end":{"row":14,"column":4}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":4},"end":{"row":14,"column":5}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":5},"end":{"row":14,"column":6}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":6},"end":{"row":14,"column":7}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":7},"end":{"row":14,"column":8}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":10},"end":{"row":15,"column":11}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":9},"end":{"row":15,"column":10}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":8},"end":{"row":15,"column":9}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":60,"column":0},"end":{"row":60,"column":1}},"text":"\t"},{"action":"removeLines","range":{"start":{"row":34,"column":0},"end":{"row":60,"column":0}},"nl":"\n","lines":[" //var text = \"\";","  // Plats för förändring.  ","  // Returnera den konverterade strängen.","  // Vid fel, kasta ett undantag med ett meddelande till användaren. "," "," //for(i = 0; i < str.length; i += 1){","  "," // if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 || str.charCodeAt(i) > 195 && str.charCodeAt(i) < 215){","  "," // text = text + str.charCodeAt[i].replace(\"A\",\"#\").toLowerCase();"," // }"," // else {","  //text = text + str.charCodeAt[i].replace(\"a\",\"#\").toUpperCase();"," // }"," "," //}","//\treturn (str);","//}","//else {"," //  return (\"Felmeddelande\");"," // }","","","","\t","\t"]},{"action":"removeText","range":{"start":{"row":33,"column":1},"end":{"row":33,"column":9}},"text":"/ var i;"},{"action":"removeText","range":{"start":{"row":33,"column":1},"end":{"row":34,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":1}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":2},"end":{"row":14,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":2}},"text":"\t\t"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":52,"column":8},"end":{"row":52,"column":8},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1415380791000}