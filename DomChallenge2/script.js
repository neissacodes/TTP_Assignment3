//Part 1
let button1 = document.getElementById("button1");
button1.addEventListener("click", function(event){
    document.getElementById("argu_text").innerText = "Im Right";
});


let button2 = document.getElementById("button2");
button2.addEventListener("click", function(event){
    document.getElementById("argu_text").innerText = "No, Im Right";
});


//Part 2
let elHover = document.getElementById("element-hover");

elHover.addEventListener("mouseenter", function(event){
    alert("Hey, I told you not to hover over me!")  
});

//Part 3
let buttonS = document.getElementById("button-submit");
let username;
let email;
let password;

buttonS.addEventListener("click", function(event){
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    //Part 4
    if(password == 12345678){
        document.getElementById("login").innerText = "Logged In"
        }
    else{
        alert("Wrong password");
    }

});



