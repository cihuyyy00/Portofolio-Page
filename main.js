const hamber = document.querySelector(".hamber");
const menu = document.querySelector(".menu");
const startIcon = document.querySelector(".start");
const closeIcon = document.querySelector(".close");

if (window.innerWidth <= 768) {
  menu.classList.remove("tampil");
}

hamber.addEventListener("click", () => {
  menu.classList.toggle("tampil");

  if (menu.classList.contains("tampil")) {
    startIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    startIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});
