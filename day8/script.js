// 🔹 1. getElementById, querySelector, innerHTML
// Practice Questions:

// Create a paragraph with an id of "demo" and use JavaScript to change its content to "Hello, DOM!" using getElementById.


var changeT = document.getElementById("demo");

function changeText(){
    changeT.innerHTML = "HELLO ! DEMO";
}

var changeb = document.querySelectorAll(".btn");

//Use querySelector to select a div with the class .box and change its innerHTML to show a <h2>Updated!</h2>.

var changeh = document.querySelector(".box h2");

function changehead(){
    changeh.innerHTML = "UPDATED !";
}


changeb.forEach(function(changeb){
    changeb.addEventListener("click",function(){
     changeb.innerHTML="clicked";
    })
})


var spanElement = document.querySelector("p span"); // Selects <span> inside <p>
spanElement.textContent = "updated dynamically!";






//ADD EVENTLISTNER

//Add a button that says "Click Me" and when clicked, it alerts "Button Clicked!".



var changeb1 = document.querySelector(".btn1");

changeb1.addEventListener("click",function(){
    changeb1.innerHTML="clicked bitch";
    alert("button is clicked");
})



  var input1 = document.querySelector("#btnInput");
  var newp = document.querySelector("#newp");
  var text1 = document.querySelector("#text1");

  input1.addEventListener("click", function() {
    newp.innerHTML = text1.value;
  });


//   Create a div. Add a mouseover event that changes its background color when the mouse is over it.

var newDIv = document.querySelector(".mouseOver");

newDIv.addEventListener("mouseover",function(){
     newDIv.style.backgroundColor = "red";
});

var newDIv = document.querySelector(".mouseOver");

newDIv.addEventListener("mouseout",function(){
     newDIv.style.backgroundColor = "greenyellow";
});




//Create a list of items. When you click any item, it should log which item was clicked using event listeners.


 var buttons = document.querySelectorAll("ul button");

  // Add click event to each button
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      console.log("You clicked:", button.id);
    });
  });



var colorc = document.querySelector("#colorc");

colorc.addEventListener("click",function(){
       changeT.style.color = "red";

       //Toggle the visibility of an image (display: none/block) using a button.

       if(newDIv.style.display == "block"){
        newDIv.style.display = "none";
       }
       else{
          newDIv.style.display = "block";
       }
})


var increaseSize = document.querySelector("#increaseSize");

increaseSize.addEventListener("click",function(){
     var currentSize = parseInt(window.getComputedStyle(changeT).fontSize);
    changeT.style.fontSize= (currentSize+2)+"px";
})


var decreaseSize = document.querySelector("#decreaseSize");

decreaseSize.addEventListener("click",function(){
     var currentSize =parseInt(window.getComputedStyle(changeT).fontSize);
    changeT.style.fontSize= (currentSize-2)+"px";
})


//Change the src attribute of an <img> tag to a different image when a button is clicked.

var image = document.querySelector(".image");
var imgChange = document.querySelector("#imgChange");
var source = image.querySelector("img")
var add = source.src;

imgChange.addEventListener("click",function(){
    if(imgChange.innerText=="change image"){
        imgChange.innerText = "change img";
    source.src = "https://images.unsplash.com/photo-1747586181140-2ec6b2c11b80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D";
}
else{
     imgChange.innerText = "change image";
    source.src = "https://images.unsplash.com/photo-1747599309107-20504ba6b8dd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
}
})




var toggle =  document.querySelector("#toggle");
var body = document.body;

toggle.addEventListener("click",function(){
    if(toggle.innerText=="dark mode"){
        toggle.innerText="light mode"
        body.style.backgroundColor = "black";
          body.style.color = "white";

    }
    else {
         toggle.innerText="dark mode";
           body.style.backgroundColor = "white";
          body.style.color = "black";

    }
})
