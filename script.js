const button = document.getElementById("loginButton");
const addButton = document.getElementById("addButton");
const likeButton1 = document.getElementById("likeButton1");
const likeButton2 = document.getElementById("likeButton2");
const definitionTitle1 = document.getElementById("definitionTitle1");
const definitionTitle2 = document.getElementById("definitionTitle2");

likeButton1.textContent = "22 Me gusta";
likeButton2.textContent = "45 Me gusta";

button.onclick = function() {
    if (button.textContent === "Iniciar sesión") {
        button.textContent = "Cerrar sesión";
    } else {
        button.textContent = "Iniciar sesión";
    }
};

addButton.onclick = function() {
    addButton.style.display = "none"; 
};

function handleLike(button, title) {
    let count = parseInt(button.textContent.split(' ')[0]);
    count++;
    button.textContent = count + " Me gusta";
    setTimeout(() => {
        alert("Te gustó la definición: " + title.textContent);
    }, 10);
}

likeButton1.onclick = function() {
    handleLike(likeButton1, definitionTitle1);
};

likeButton2.onclick = function() {
    handleLike(likeButton2, definitionTitle2);
};