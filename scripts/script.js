// JavaScript Document

/////Menu hamburger //////
//bron: https://codepen.io/shooft/pen/jOMOroZ
var hamburger = document.querySelector("button");

hamburger.addEventListener("click", menuOpenen);

function menuOpenen() {
  document.body.classList.toggle("kruisje");
}

/////Bolletjes Slider //////
//bron: https://codepen.io/shooft/pen/ZEpXmrg

function maakProductwrapper(sliderID) {
  let slider = document.querySelector("#" + sliderID);
  let sliderElementsContainer = slider.querySelector(":scope > ul");
  let sliderElements = sliderElementsContainer.querySelectorAll("li");
  let dots = slider.querySelectorAll(":scope > nav a");

  //bolletjes activeren
  function iniDots() {
    for (dot of dots) {
      dots.addEventListener("click", function(e) {

        e.preventDefault();

        let newElementID = this.hash.substring(1);

        updateCurrentElement(newElementID);

        let theElement = slider.querySelector("#" + newElementID);
        let elementOffset = theElement.offsetLeft;
        sliderElementsContainer.scrollLeft = elementOffset;

        updateDots(newElementID);
      });
    }
  }

  //eerste element actief maken
  function iniStartPosition() {
    // huidige
    sliderElements[0].classList.add("current");
    dots[0].classList.add("current");
    sliderElementsContainer.scrollLeft = 0;
  }


  //functies
  function updateCurrentElement(elementID) {
    let currentElement = slider.querySelector(":scope > ul > .current");
    currentElement.classList.remove("current");

    let newElement = slider.querySelector("#" + elementID);
    newElement.classList.add("current");
  }

  //bolletjes updaten
  function updateDots(elementID) {
    let currentDot = slider.querySelector(":scope > nav .current");
    currentDot.classList.remove("current");

    let newDot = slider.querySelector("a[href='#" + elementID + "']");
    newDot.classList.add("current");
  }

  //bolletjes activeren
  iniDots();
  iniStartPosition();
}

//slider
(function() {
  maakProductwrapper("slides-Foto");
})();
