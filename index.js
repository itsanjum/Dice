let randomNumber1 = Math.floor(Math.random() * 6) + 1; 


var randomDiceImage = "dice"+randomNumber1+".png";

var randomImageeSource = "images/" +randomDiceImage;

var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageeSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1; 



var randomImageeSource2 = "images/dice" +randomNumber2+".png";
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageeSource2);


if (randomNumber1 >randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Play 2 Wins! 🚩"

}
else {
    document.querySelector("h1").innerHTML="Draw !";
}