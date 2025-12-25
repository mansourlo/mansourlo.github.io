// ? afficher le contenu du menu au clic de l'icone de ce dernier
const menuItems = document.getElementsByClassName("nav-bar")[0];
const showMenu = () => {
    menuItems.classList.toggle("menu");
}