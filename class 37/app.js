// let day = "mon";
// switch (day) {
//   case "mon":
//     alert("1");
//     break;
//   case "tue":
//     alert("2");
//   default:
//     alert("3");
// }

// var time = "Tue"

// switch(time){
//     case "Mon":
//         alert("1")
//         case "Mon":
//         alert("2")
//         case "Tue":
//         alert("3")
// }

// var arr = [1, 2, 4, 5, 6, 7];
// var min = arr[0];

// for (var j = 0; j < arr.length; j++) {
//   if (arr > min) {
//     if (arr < min) {
//       min = arr[j];
//     }
//   }
// }

// console.log(min);
// for (var i = 0; i < arr.length; i++) {
//   switch (arr > min) {
//     case arr > min:
//       switch (min < arr) {
//         case min < arr:
//           min = arr[i];
//       }
//   }
// }

// console.log(min);
/*
function abc(){
    console.log(event.keyCode)
}
window.onkeydown = abc;
*/

let left = 0;
// character.className = character.className + " text"
console.log(character.className)
// character.setAttribute("class", "test-class");
function abc() {
  console.log(event.keyCode);
  let character = document.getElementById("character");
  let myMan = document.getElementById("iron-man");
  if (event.keyCode === 39) {
    left = left + 10;
    character.style.left = left + "px";
    character.src = "./images/iron-walk.gif";
    setTimeout(function(){
      left = left + 0;
      character.style.right = left + "px";
      character.src = "./images/iron-walk.gif";
      character.src = "./images/main.gif"
    },1000)
  }
  if (event.keyCode === 37) {
    left = left - 10;
    character.style.left = left + "px";
  }
  if (event.keyCode === 38) {
    left = left + 10;
    character.style.top = left + "px";
    character.src = "./images/iron-gem.gif";
  }
  if (event.keyCode === 65) {
    left = left + 10;
    myMan.style.right = left + "px";
    character.src = "./images/iron-walk.gif";
  }
  if (event.keyCode === 83) {
    left = left - 10;
    myMan.style.right = left + "px";
  }
  if (event.keyCode === 32) {
    left = left + 10;
    myMan.style.top = left + "px";
    character.src = "./images/iron-gem.gif";
  }
}
function foo() {
  console.log("two");
}

console.log("one");
setTimeout(foo, 5000);
console.log("three");

window.onkeydown = abc;


for(var i = 0; i < 5; i++){
  for(var j = 0; j < 5; j++){
    console.log(i,j)
  }
}

for (var a = 0; a < 1000; a++){
  //  console.log(a)
}
console.log("hello")