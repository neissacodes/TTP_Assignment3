//Number 1
const container = document.getElementById("container");
console.log(container);
//Number 2
const container1 = document.querySelector("#container");
console.log(container1);
//Number 3
const second = document.getElementsByClassName("second");
console.log(second);
//Number 4
const number4 = document.getElementsByTagName("ol")[0].getElementsByClassName("third");
console.log(number4);
//Number 5 Give the section with an id of container the text "Hello!".
const number5 = document.getElementById("container").innerText = "Hello";
console.log(number5);
//Number 6  Add the class main to the div with a class of footer.
const number6 = document.getElementsByClassName("footer")[0].classList.add("main");
console.log(number6);
//Number 7  Remove the class main on the div with a class of footer.
const number7 = document.getElementsByClassName("footer")[0].classList.remove("main")
console.log(number7);
//Number8 Create a new li element.
const number8 = document.createElement("li")
console.log(number8);
//Number 9 Give the li the text "four".
number8.innerText = "four"
//Number 10 Append the li to the ul element.
//const number10 = document.getElementsByTagName("ul").appendChild(number9);
document.getElementsByTagName('ul')[0].appendChild(number8);
//Number 12  Loop over all of the lis inside the ol tag and give them a background color of "green".
var ol = document.getElementsByTagName("ol");
var lis = ol[0].getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
lis[i].style.backgroundColor = "green";
}
//Number 13 Remove the div with a class of footer.
document.getElementsByClassName("footer")[0].remove();
