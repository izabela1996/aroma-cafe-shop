const menu = document.querySelector(".menu-mobile");
const menuItem = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
if (menu.classList.contains("showMenu")){
  menu.classList.remove("showMenu");
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
}
else{
  menu.classList.add("showMenu");
  closeIcon.style.display = "block";
  menuIcon.style.display = "none";
}

}

hamburger.addEventListener("click", toggleMenu);

menuItem.forEach(
  function(menuItem){
    menuItem.addEventListener("click", toggleMenu);
  }
)


let slideindex = 1;
showslides(slideindex);

function plusslides(n) {
  showslides(slideindex += n);
}
function currentslide(n) {
  showslides(slideindex = n);
}

function showslides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideindex = 1
  }
  if (n < 1) {
    slideindex = slides.length
  }
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideindex-1].style.display = "block";
  dots[slideindex-1].className += " active";
}