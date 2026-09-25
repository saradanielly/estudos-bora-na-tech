const botaoMenu = document.querySelector("#botaoMenu");
const menu = document.querySelector("#menu");

botaoMenu.addEventListener("click", () => {
    const aberto = botaoMenu.getAttribute("aria-expanded") === "true";

    botaoMenu.setAttribute("aria-expanded", !aberto);
    menu.hidden = aberto;
});