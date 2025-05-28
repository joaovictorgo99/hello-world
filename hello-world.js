const helloLabel = document.getElementById("hello-label");
const helloButton = document.getElementById("hello-button");

helloButton.onclick = function(){
    helloLabel.textContent = "Hello, World!";
}