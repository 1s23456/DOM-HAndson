// Ques 1:
let first = document.getElementById("text");
console.log(first);


//Ques 2:
let second = document.getElementsByTagName("h1");
console.log(second);


//Ques 3:
let third = document.getElementsByClassName("box");
console.log(third);



//Ques 4:
let changeText = document.getElementsByClassName("changeText");
console.log(changeText[0].innerHTML);
changeText[0].innerHTML = "Hello World"

// function changeMe(){
//          changeText[0].innerHTML ="Hello World"     
// }


//Ques 5:
var Change = document.getElementsByClassName("change");
console.log(Change[0].innerHTML);

function trans(){
              Change[0].innerHTML ="Welcome to Elevation Academy";
}


//Ques 6:
let six = document.getElementById("heading");
console.log(six);
six.style.color ="red"
six.style.fontSize ="50px"


//Ques 7:
let parent = document.querySelector(".parent");
let count=0;
function changeDirection(){
if(count%2==0){
              parent.style.display ="block";
              count++;
}

else{
                            parent.style.display ="flex";
                            count--;

}
}

