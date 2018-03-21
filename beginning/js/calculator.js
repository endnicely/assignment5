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

//    zero.addEventListener("click", enter($("zero")), false);
//    
//    one.addEventListener("click", enter($("one")), false);
//    
//    two.addEventListener("click", enter($("two")), false);
//    
//    three.addEventListener("click", enter($("three")), false);
//    
//    four.addEventListener("click", enter($("four")), false);
//    
//    five.addEventListener("click", enter($("five")), false);
//    
//    six.addEventListener("click", enter($("six")), false);
//    
//    seven.addEventListener("click", enter($("seven")), false);
//    
//    eight.addEventListener("click", enter($("eight")), false);
//    
//    nine.addEventListener("click", enter($("nine")), false);
//    
//    period.addEventListener("click", enter($("period")), false);
//    
//    add.addEventListener("click", enter($("add")), false);
//    
//    subtract.addEventListener("click", enter($("subtract")), false);
//    
//    multiply.addEventListener("click", enter($("multiply")), false);
//    
//    divide.addEventListener("click", enter($("divide")), false);
    
//    equal.addEventListener("click", calculate, false);
     
}


window.addEventListener("load", init, false);
