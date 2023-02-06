
/****************Preloader*****************/

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("loaded")
});


/****************Navbar Button*****************/
const open = document.querySelector(".open"),
      close = document.querySelector(".close"),
      navToggle = document.querySelector(".nav_toggle"),
      navContainer = document.querySelector(".nav_container");

navToggle.addEventListener("click", () => {
    open.classList.toggle("hide");
    close.classList.toggle("hide");
    navContainer.classList.toggle("left");
})


