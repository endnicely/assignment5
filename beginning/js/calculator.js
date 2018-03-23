/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function enter(val) {
    "use strict";
    $("result").value +=  val;
}



function calculate() {
    "use strict";
    $("result").value = eval($("result").value);
}


function init() {
    "use strict";
    buttons.addEventListener("click", function (e) {
        if (e.target.id === "equal") {
            calculate();
        } else {
            enter(e.target.value);
        }
    });

//    zero.addEventListener("click", function (e) {
//	    enter(e.target.value);
//    }, false);
//    
//    one.addEventListener("click", function (e) {
//        enter(e.target.value);
//    }, false);
//
//    two.addEventListener("click",  function (e) {
//        enter(e.target.value);
//    }, false);
//    
//    three.addEventListener("click", function (e) {
//        enter(e.target.value);
//    }, false);
//    
//    four.addEventListener("click", function (e) {
//        enter(e.target.value);
//    }, false);
//    
//    five.addEventListener("click",  function (e) {
//        enter(e.target.value);
//    }, false);
//    
//    six.addEventListener("click",  function (e) {
//        enter(e.target.value);
//    }, false);
//    
//    seven.addEventListener("click", function (e) {
//        enter(e.target.value);
//    }, false);
//    
//    eight.addEventListener("click",  function (e) {
//        enter(e.target.value);
//    }, false);
//    
//    nine.addEventListener("click",  function (e) {
//        enter(e.target.value);
//    }, false);
//    
//    period.addEventListener("click",  function (e) {
//        enter(e.target.value);
//    }, false);
//    
//    add.addEventListener("click",  function (e) {
//        enter(e.target.value);
//    }, false);
//
//    subtract.addEventListener("click",  function (e) {
//        enter(e.target.value);
//    }, false);
//    
//    multiply.addEventListener("click",  function (e) {
//        enter(e.target.value);
//    }, false);
//    
//    divide.addEventListener("click", function (e) {
//        enter(e.target.value);
//    }, false);
//    
    equal.addEventListener("click", calculate, false);
     
}


window.addEventListener("load", init, false);
