const botao = document.getElementById("mode-selector");
const container = document.getElementById("container");

const darkMode = () => {
    container.classList.toggle("dark-mode");
}
botao.addEventListener("click", darkMode);

