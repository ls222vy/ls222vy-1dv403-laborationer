window.onload = function() {
    "use strict";
    /*global Message, MessageMotor*/
 
    var mess = new Message ("min text", new Date());
     console.log(mess.getText());
    mess.setText();
   
    MessageMotor.init();
   
};
    
    