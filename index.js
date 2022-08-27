let home=0
let guest=0
let homel=document.getElementById("home-score")
let guestel=document.getElementById("guest-score")
function add1h(){
    home+=1;
    homel.innerHTML=home;
}
function add2h(){
    home+=2;
    homel.innerHTML=home;
}
function add3h(){
    home+=3;
    homel.innerHTML=home;
}
function add1g(){
    guest+=1;
    guestel.innerHTML=guest;
}
function add2g(){
    guest+=2;
    guestel.innerHTML=guest;
}
function add3g(){
    guest+=3;
    guestel.innerHTML=guest;
}
function reset(){
   home=0;
   guest=0;
   guestel.innerHTML=guest;
   homel.innerHTML=home;
}