var userdoller = (500+250)*11225;
var userYevro = (120*11685);
var userNatija = (userdoller + userYevro);

const useName = prompt("Ismingizni kiriting");
var useSumma = prompt("Sizda qancha pul bor'");


var elhedding = document.querySelector(".error");
var elspan = document.querySelector(".finish");

if ( useSumma>userNatija ){
    elhedding.textContent=("Oq yol. Sayohatingiz yaxshi o'tsin");

} else{
    elhedding.textContent=("Biroz sabir qilasiz. Pul miqdoringiz kam");
}
elspan.textContent=useName