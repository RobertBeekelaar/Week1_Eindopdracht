let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "250px";
    getSidebarTitle.style.opacity = "0.8";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
    
  }

  else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;

  }

}


const white = document.querySelector('#whiteb');

white.addEventListener('click', function (e) {

  document.getElementById('body').className = "white-background";
  document.getElementById('title').innerHTML = "WHITE";
  
}
);


const yellow = document.querySelector('#yellowb');

yellow.addEventListener('click', function (e) {

  document.getElementById('body').className = "yellow-background";
  document.getElementById('title').innerHTML = "YELLOW";
}
);

const red = document.querySelector('#redb');

red.addEventListener('click', function (e) {

  document.getElementById('body').className = "red-background";
  document.getElementById('title').innerHTML = "RED";
}
);


const green = document.querySelector('#greenb');

green.addEventListener('click', function (e) {

  document.getElementById('body').className = "green-background";
  document.getElementById('title').innerHTML = "GREEN";
}
);

const blue = document.querySelector('#blueb');

blue.addEventListener('click', function (e) {

  document.getElementById('body').className = "blue-background";
  document.getElementById('title').innerHTML = "BLUE";
}
);

const gray = document.querySelector('#grayb');

gray.addEventListener('click', function (e) {

  document.getElementById('body').className = "gray-background";
  document.getElementById('title').innerHTML = "GRAY";
}
);

const azul = document.querySelector('#azulb');

azul.addEventListener('click', function (e) {

  document.getElementById('body').className = "azul-background";
  document.getElementById('title').innerHTML = "AZUL";
}
);