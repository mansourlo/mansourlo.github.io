// ? afficher le contenu du menu au clic de l'icone de ce dernier
const menuItems = document.getElementById("navig");
const icone = document.getElementById("btn-menu");
const showMenu = () => {
    menuItems.classList.toggle("menu");
    icone.src = "images/btn-close.png";

    if(menuItems.classList[1] !== "menu"){
        icone.src = "images/btn-menu.png";
    }
}