const navFeature = document.querySelector(".feature");
const featArrDown = document.querySelector(".feature-arrow-down img");
const featDropDown = document.querySelector(".feature-dropdown");

navFeature.addEventListener("click", () => {
  featDropDown.classList.toggle("hide");
  //   console.log(featDropDown.classList);

  if (featDropDown.classList.contains("hide")) {
    featArrDown.src = "images/icon-arrow-up.svg";
  } else {
    featArrDown.src = "images/icon-arrow-down.svg";
  }
});
const navComp = document.querySelector(".Company");
const comArrDown = document.querySelector(".company-arrow-down img");
let comDropdown = document.querySelector(".company-dropdown");

navComp.addEventListener("click", () => {
  comDropdown.classList.toggle("unhide");
  if (comDropdown.classList.contains("unhide")) {
    comArrDown.src = "images/icon-arrow-down.svg";
  } else {
    comArrDown.src = "images/icon-arrow-up.svg";
  }
});
const regCont = document.querySelector(".register-container");
const navItems = document.querySelector(".nav-items");
const openMenu = document.querySelector(".open-menu-icon");
const openImg = document.querySelector(".open-menu-icon img");
// const closeImg = document.querySelector(".close-menu-icon");

openMenu.addEventListener("click", () => {
  navItems.style.display = "flex";
  regCont.style.display = "flex";
  const closeImg = document.createElement("div");
  closeImg.classList.add("close-menu-icon");
  closeImg.innerHTML = ` <img src="images/icon-close-menu.svg" alt="" />`;
  navItems.appendChild(closeImg);
  closeImg.addEventListener("click", () => {
    navItems.style.display = "none";
    closeImg.style.display = "none";
    regCont.style.display = "none";
  });
});
