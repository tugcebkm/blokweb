// JavaScript Document
function maakProductwrapper(sliderID) {
	let slider = document.querySelector("#"+sliderID);
  let sliderElementsContainer = slider.querySelector(":scope > ul");
	let sliderElements = sliderElementsContainer.querySelectorAll("li");
  let dots = slider.querySelectorAll(":scope > nav a");


  /****************/
	/* DE BOLLETJES */
	/****************/

  // de bolletjes activeren
  function iniDots() {
    for (dot of dots) {
			// elk bolletje laten luisteren naar kliks
      dots.addEventListener("click", function(e){
				// als er geklikt wordt

				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

				// de id van het bijbehorende element bepalen
				let newElementID = this.hash.substring(1); // de # eraf halen

        // nieuwe element current element maken
		    updateCurrentElement(newElementID);

				// scrollLeft van de container aanpassen
		    let theElement = slider.querySelector("#"+newElementID);
		    let elementOffset = theElement.offsetLeft;
		    sliderElementsContainer.scrollLeft = elementOffset;

        // de bolletjes updaten
		    updateDots(newElementID);
      });
    }
	}


  /*****************/
	/* START POSITIE */
	/*****************/

	// het eerste element en bolletje actief maaken
  function iniStartPosition() {
    // eerste element current maken
    sliderElements[0].classList.add("current");
    // eerste bolletje current maken
		dots[0].classList.add("current");
		// aan het begin van de container starten
    sliderElementsContainer.scrollLeft = 0;
  }


  /*********************/
	/* ALGEMENE FUNCTIES */
	/*********************/

  ////////////////////////////
	// update current element //
	function updateCurrentElement(elementID) {
		// het huidige current element opzoeken
		let currentElement = slider.querySelector(":scope > ul > .current");
		// de class current verwijderen
		currentElement.classList.remove("current");

		// het nieuwe element opzoeken
		let newElement = slider.querySelector("#"+elementID);
		// de class current toevoegen
		newElement.classList.add("current");
	}


  //////////////////////
  // update dots //
  function updateDots(elementID){
		// het huidige current bolletje opzoeken
		let currentDot = slider.querySelector(":scope > nav .current");
		// de class current verwijderen
		currentDot.classList.remove("current");

		// het nieuwe bolletje opzoeken
    let newDot = slider.querySelector("a[href='#"+elementID+"']");
		// de class current toevoegen
		newDot.classList.add("current");
  }



	// de bolletjes activeren
  iniDots();
  // de slider bij het begin starten
  iniStartPosition();
}


/************************/
/* DE slider CREËREN */
/************************/

// nadat de pagina geladen is, de sliders activeren
(function() {
  // hier de id gebruiken van de section in de html
  maakProductwrapper("slides-Foto");
  //je kunt hier ook meerdere sliders activeren
})();
