const redClick = document.getElementById("box1");
const greenClick = document.getElementById("box2");
const blueClick = document.getElementById("box3");


redClick.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

greenClick.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});

blueClick.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});