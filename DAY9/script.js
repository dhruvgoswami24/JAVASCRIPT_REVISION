// Create a text input. As the user types (on input), display the typed text in real time in a <p> tag. -->

var text = document.querySelector("#text");
var realText = document.querySelector("#realText");

text.addEventListener("input", function(){
    let v = this.value
    realText.innerText = v;
})


// <!-- Create an input box that shows how many characters are typed, updating live. -->

var count = document.querySelector("#count");

text.addEventListener("input", function(){
    let v = this.value
    count.innerHTML = v.length;
    
})




var output = document.querySelector("#output");
var drop = document.querySelector("#dropdown");

drop.addEventListener("change",function(){
   output.innerHTML = drop.value;
})




// Create a checkbox. Show a message when the checkbox is checked or unchecked.

var checkbox =  document.querySelector("#checkbox");
var checkmsg =   document.querySelector("#checkmsg");

checkbox.addEventListener("change",function(){
    if(checkbox.checked){
        checkmsg.innerHTML = "checked"
    }
    else{
        checkmsg.innerHTML= "check karo na pahle"
    }
})



//form


let form = document.getElementById("form");
let uname = document.getElementById("uname");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let cpass = document.getElementById("confirmpass");
let msg = document.getElementById("msg")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(uname.value===" "|| pass.value===" "||mail.value === " "||confirmpass.value===" "){
        alert("Fields cannot be empty")
    }
    if(!mail.value.includes()==="@"){
        alert("email should contain ")
    }
    if(pass.value.length<6){
        alert("Password must be at least 6 characters.")
    }
    if(pass.value!==confirmpass.value){
        alert("Password is not matching")}

  

})


