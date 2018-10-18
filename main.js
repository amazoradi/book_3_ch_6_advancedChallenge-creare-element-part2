let messageArt = document.createElement("article");
messageArt.setAttribute("id","messages");

document.body.appendChild(messageArt);

let addingToTheArticle = document.querySelector("#messages");

  
function createSections (content) {
  let messageHolder = document.createElement("section");
  messageHolder.classList.add("message")
  messageHolder.textContent = content;
  messageArt.appendChild(messageHolder)
};


createSections("happy 4th of july");
createSections("What are we blowing up today?!")
createSections("A literal tons of fireworks")
createSections("When's the hotdog eating contest")
createSections("Just before the fried twinkie eating contenst")
