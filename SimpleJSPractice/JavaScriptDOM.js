const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious tect-content!"

const redText = document.createElement("p");
redText.setAttribute("style", "color: red;");
redText.textContent = "Hey I'm red!";

const blueText = document.createElement("h3");
blueText.setAttribute("style", "color: blue;");
blueText.textContent = "I'm a blue h3!"

const innerDiv = document.createElement("div");
innerDiv.setAttribute("style", "border: solid, black; background: pink;")

const firstChild = document.createElement("h1");
firstChild.textContent = "I'm in a div"

const secondChild = document.createElement("p");
secondChild.textContent = "ME TOO!";

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(innerDiv);
innerDiv.appendChild(firstChild);
innerDiv.appendChild(secondChild);