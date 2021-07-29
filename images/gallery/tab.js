function open__item(evt, item__name) {
  var i, tab__content, tablink;

  tab__content = document.getElementsByClassName("tab__content");
  for (i = 0; i < tab__content.length; i++) {
    tab__content[i].style.display = "none";
  }

  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }

  document.getElementById(item__name).style.display = "block";
  evt.currentTarget.className += " active";
}
