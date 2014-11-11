"use strict";

var makePerson = function(persArr){

    for(var i = 0; i < persArr.length; i += 1){
    
        if(typeof (persArr[i].name) !== "string"){
            console.log ("Du måste mata in bokstaver");
        }
        if (typeof persArr[i].age){
            console.log("Du måste mata in siffor");
        }
    }

	// Din kod här...
    var persons = {
        minAge : function(){
            return Math.min.apply(Math,persArr.map(function(persArr){return persArr.age}));
        },
       
        maxAge : function(){
            return Math.max.apply(Math,persArr.map(function(persArr){return persArr.age}));
        },
        averageAge : function(){
       
           return Math.round(persArr.map(function(persArr){return persArr.age}).reduce(function(a, b){return a+b}) / persArr.length);
        },
        
        names : function(){
            var names = persArr.map(function(persArr){return persArr.name});
            var sortedNames = names.sort(function (a, b) {return a.localeCompare(b);});
            var namesAsString = sortedNames.join(', ');
            return namesAsString;
        }
    };
    
    console.log(persons.names());
    return {minAge: persons.minAge(),maxAge: persons.maxAge(),averageAge: persons.averageAge(), names: persons.names()};
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);