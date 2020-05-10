let toggleNavStatus = false;
//ToggleMenu
let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "260px";
    getSidebarTitle.style.opacity = "0.8";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {
    getSidebar.style.width = "40px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
}
//colorToggle
const liNodeList = document.querySelectorAll('li');
let liArray = [];
let colorArray = ["white", "#F1D77E", "#B65042", "#518058", "#21918B", "#337C99", "#869399", ''];
let backgroundArray = ["white", "yellow", "red", "green", "azul", "blue", "gray", ''];
const body = document.getElementById('body-color');

Array.from(liNodeList).forEach(function (li) {
  liArray.push(li)
});

for (let i = 0; i < liArray.length; i++) {
  liArray[i].onclick = function () {

    if (liArray[i] == liArray[7]) {
      liArray[7] = prompt("give your own hex color value!")
      let textValue = liArray[7];
      document.body.style.backgroundColor = liArray[7]
      document.getElementById('color-heading').innerHTML = (textValue)

    } else {
      document.body.style.backgroundColor = colorArray[i];
      document.getElementById('color-heading').innerHTML = (backgroundArray[i])
    };
  };
};