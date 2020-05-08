window.addEventListener('load', init, false);

function init() {
    "use strict";
    
    var schere = document.querySelector('#option1'),
        stein = document.querySelector('#option2'),
        papier = document.querySelector('#option3'),
        wDisplay = document.querySelector('#wins'),
        lDisplay = document.querySelector('#losses'),
        log = document.querySelector('#log'),
        wValue = 0,
        lValue = 0;
    
    function schereClick() {
        var comp = Math.floor((Math.random() * 3) + 1);
        
        if (comp === 1) {
            // draw
            log.innerHTML = "Unentschieden";
        } else if (comp === 2) {
            // loss
            lValue++;
            lDisplay.innerHTML = lValue;
            log.innerHTML = "Du verlierst";
        } else if (comp === 3) {
            // win
            wValue++;
            wDisplay.innerHTML = wValue;
            log.innerHTML = "Du gewinnst";
        }
    }
    
    function steinClick() {
        var comp2 = Math.floor((Math.random() * 3) + 1);
        
        if (comp2 === 1) {
            // win
            wValue++;
            wDisplay.innerHTML = wValue;
            log.innerHTML = "Du gewinnst";
        } else if (comp2 === 2) {
            // draw
            log.innerHTML = "Unentschieden";
        } else if (comp2 === 3) {
            // loss
            lValue++;
            lDisplay.innerHTML = lValue;
            log.innerHTML = "Du verlierst";
        }
    }
    
    function papierClick() {
        var comp3 = Math.floor((Math.random() * 3) + 1);
        
        if (comp3 === 1) {
            // win
            wValue++;
            wDisplay.innerHTML = wValue;
            log.innerHTML = "Du gewinnst";
        } else if (comp3 === 2) {
            // draw
            log.innerHTML = "Unentschieden";
        } else if (comp3 === 3) {
            // loss
            lValue++;
            lDisplay.innerHTML = lValue;
            log.innerHTML = "Du verlierst";
        }
    }
    
    schere.addEventListener('click', schereClick, false);
    stein.addEventListener('click', steinClick, false);
    papier.addEventListener('click', papierClick, false);
}