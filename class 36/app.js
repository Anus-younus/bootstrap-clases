/*
for(let i = 0; i < 5; i++){
    console.log(i)
}
*/

/*
let i = 0;
while(i < 10){
    console.log(i)
    i++;
}
*/
/*
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 0);
*/

function myFunction(){
    alert("Hello")
}
/*
function imageChange(e){
    e.src = "./images/img-1.jpg"
    console.log('text', e)
}
*/

function imageChange(e){
    e.style.transform = "scale(1.1)"
    e.style.transition = ".5s ease"
}

function imageOut(e) {
         e.style.transform = "scale(1.0)"
}

function abc(){
    console.log("text..." ,event.keyCode)
    if(event.keyCode === 13){
        console.log("Submit")
    }
}

function foo(){
    console.log("test === >", event.key)
}

window.onkeydown = foo