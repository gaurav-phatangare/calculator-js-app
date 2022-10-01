//  Target input

var number1 = document.querySelector("#number1");
var number2 = document.querySelector("#number2");


var add = document.querySelector(".add");
var sub = document.querySelector(".sub");
var mul = document.querySelector(".mul");
var div = document.querySelector(".div");
var mod = document.querySelector(".mod");
var ac = document.querySelector(".ac");

var finalResult = document.querySelector("#finalResult")


number1.addEventListener("change",()=>{
    number1value = number1.value;
});

number2.addEventListener("change",()=>{
    number2value = number2.value;
});


add.addEventListener("click", ()=>{
    var Total = parseInt(number1value) + parseInt(number2value);
    console.log(number2value);
    finalResult.textContent = Total;

})

sub.addEventListener("click", ()=>{
    var Total = parseInt(number1value) - parseInt(number2value);
    console.log(number2value);
    finalResult.textContent = Total;

})

mul.addEventListener("click", ()=>{
    var Total = parseInt(number1value) * parseInt(number2value);
    console.log(number2value);
    finalResult.textContent = Total;

})

div.addEventListener("click", ()=>{
    var Total = parseInt(number1value) / parseInt(number2value);
    console.log(number2value);
    finalResult.textContent = Total;

})

mod.addEventListener("click", ()=>{
    var Total = parseInt(number1value) % parseInt(number2value);
    console.log(number2value);
    finalResult.textContent = Total;

})

ac.addEventListener("click", ()=>{
    number1.value = 0;
    number2.value = 0;

finalResult.textContent = 0;
    

})
