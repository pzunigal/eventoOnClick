const button = document.getElementById("loginButton");
const addButton = document.getElementById("addButton");
const likeButton1 = document.getElementById("likeButton1");
const likeButton2 = document.getElementById("likeButton2");
const definitionTitle1 = document.getElementById("definitionTitle1");
const definitionTitle2 = document.getElementById("definitionTitle2");

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

likeButton1.onclick = function() {
    let count = parseInt(likeButton1.textContent.split(' ')[0]);
    count++;
    likeButton1.textContent = `${count} Me gusta`;
    alert("Te gustó la definición: " + definitionTitle1.textContent);
};

likeButton2.onclick = function() {
    let count = parseInt(likeButton2.textContent.split(' ')[0]);
    count++;
    likeButton2.textContent = `${count} Me gusta`;
    alert("Te gustó la definición: " + definitionTitle2.textContent);
};