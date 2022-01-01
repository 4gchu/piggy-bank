let history = document.querySelector(".history");
let runningBalance = "0.00";
let indexBalance= document.querySelector("#balance-amount")

function playSound () {
let noise = new Audio('coin.wav')
noise.play();
}

document.querySelectorAll("#penny") .forEach(function(coin){
coin.addEventListener("mousedown", function() {
playSound();
pennyHistory();
saveBalanceToLocalStorage();
});
});


function pennyHistory (){
let record = document.createElement("li");

record.textContent = "P";
history.appendChild(record);
let pennyValue= .01;
adjustedBalance= +runningBalance + +pennyValue;
indexBalance.textContent = adjustedBalance.toFixed(2);
runningBalance=adjustedBalance.toFixed(2);
record.onclick = function(){
record.remove();
adjustedBalance= +runningBalance - +pennyValue;
indexBalance.textContent = adjustedBalance.toFixed(2);
runningBalance=adjustedBalance.toFixed(2);
saveBalanceToLocalStorage();
}
}

document.querySelectorAll("#nickel") .forEach(function(coin){
coin.addEventListener("mousedown", function() {
playSound();
nickelHistory();
saveBalanceToLocalStorage();
});
});

function nickelHistory (){
let record = document.createElement("li");

record.textContent = "N";
history.appendChild(record);
let pennyValue= .05;
adjustedBalance= +runningBalance + +pennyValue;
indexBalance.textContent = adjustedBalance.toFixed(2);
runningBalance=adjustedBalance.toFixed(2);
record.onclick = function(){
record.remove();
adjustedBalance= +runningBalance - +pennyValue;
indexBalance.textContent = adjustedBalance.toFixed(2);
runningBalance=adjustedBalance.toFixed(2);
saveBalanceToLocalStorage();
}
}

document.querySelectorAll("#dime") .forEach(function(coin){
coin.addEventListener("mousedown", function() {
playSound();
dimeHistory();
saveBalanceToLocalStorage();
});
});

function dimeHistory (){
let record = document.createElement("li");

record.textContent = "D";
history.appendChild(record);
let pennyValue= .10;
adjustedBalance= +runningBalance + +pennyValue;
indexBalance.textContent = adjustedBalance.toFixed(2);
runningBalance=adjustedBalance.toFixed(2);
record.onclick = function(){
record.remove();
adjustedBalance= +runningBalance - +pennyValue;
indexBalance.textContent = adjustedBalance.toFixed(2);
runningBalance=adjustedBalance.toFixed(2);
saveBalanceToLocalStorage();
}
}

document.querySelectorAll("#quarter") .forEach(function(coin){
coin.addEventListener("mousedown", function() {
playSound();
quarterHistory();
saveBalanceToLocalStorage();
});
});

function quarterHistory (){
let record = document.createElement("li");

record.textContent = "Q";
history.appendChild(record);
let pennyValue= .25;
adjustedBalance= +runningBalance + +pennyValue;
indexBalance.textContent = adjustedBalance.toFixed(2);
runningBalance=adjustedBalance.toFixed(2);
record.onclick = function(){
record.remove();
adjustedBalance= +runningBalance - +pennyValue;
indexBalance.textContent = adjustedBalance.toFixed(2);
runningBalance=adjustedBalance.toFixed(2);
saveBalanceToLocalStorage();

}
}



document.querySelector("#balance-amount").onclick = function(){
let newBalance = prompt("Change the balance name", document.querySelector("#balance-amount").textContent);
let newNumberBalance= parseFloat(newBalance)

if (isNaN(parseFloat(newBalance))) {
alert("Oops! That's not a number!");
runningBalance= runningbalance;
}

if (newNumberBalance !== NaN) {
indexBalance.textContent = newNumberBalance.toFixed(2)
runningBalance=newNumberBalance.toFixed(2)

history.replaceChildren();
}
}

function saveBalanceToLocalStorage(){
localStorage.setItem('lastBalance', runningBalance)
}

let storedBalance = localStorage.getItem('lastBalance');

if (storedBalance){
runningBalance = storedBalance;
indexBalance.textContent = storedBalance;
}
