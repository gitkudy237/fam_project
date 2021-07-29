function showmenu() {
  const nav__list = document.querySelector(".nav__list");
  nav__list.classList.toggle("nav__list--expanded");
  const toggler = document.querySelector(".nav__toggler");
  toggler.classList.toggle("nav--toggled");
}
