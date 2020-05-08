window.addEventListener('DOMContentLoaded', init, false);

function init() {
    "use strict";
    
    var submit = document.querySelector('[type="submit"]');
    submit.addEventListener('click', function (e) {validateInput(); e.preventDefault(); }, false);
    
    function validateInput() {
        var name = document.getElementById('name').value,
            mail = document.getElementById('mail').value,
            msg = document.getElementById('msg').value;
        
        if (/^[A-Za-z\s]+$/.test(name) && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail) && msg.length > 10) {
            document.getElementById('fc').style.display = "none";
            
            var newItem = document.createElement("p"); 
            newItem.setAttribute("id", "validText");
            
            var textnode = document.createTextNode("Danke für deine Nachricht. Wir antworten dir sobald wie möglich. Du kannst jetzt unter dem Menüpunkt Spiel Schere,Stein, Papier spielen.");
            newItem.appendChild(textnode);

            var main = document.getElementById("mc");
            main.insertBefore(newItem, main.childNodes[2]);
            
            document.getElementById('menuGame').style.display = "block";
        } else {
            console.log('U lame');
            window.alert('Bitte gib gültige Daten ein.');
        }
    }
}