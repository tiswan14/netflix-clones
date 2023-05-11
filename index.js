const menu = document.querySelector(".menu");
const navList = document.querySelector(".row");

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
});

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
  console.log("hai");
});
