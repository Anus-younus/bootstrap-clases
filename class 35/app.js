// function submitForm() {
//   var name = document.getElementById("name");
//   console.log(name);
// }
/*
function submitForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    if(name.value.trim() && email.value.trim()){
    console.log(email.value);
    console.log(name.value);
    name.value = ""
    email.value = ""
    }else {
        console.log("please enter input field")
}
  }*/
/*
let day = "mon";
switch (day) {
  case "mon":
    alert("1");
    break;
  case "tue":
    alert("2");
  default:
    alert("3");
}
*/

var str = "5+5-";

var newInput = "+";

// console.log(newInput.length + 1);
// console.log(str.length - 1);

var last = str[str.length - 1];
var arr = ["+", "-", "*", "/"];

if (arr.indexOf(last) !== -1 && arr.indexOf(newInput) === -1) {
  str = str.slice(-1) + last;
}
else{
  str += newInput;
}
console.log(str);
