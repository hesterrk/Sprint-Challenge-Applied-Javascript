/* If You've gotten this far, you're on your own! Although we will give you some hints:
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// 1. You will need to write a function that creates the carousel component, you will find the HTML below.


function carouselComponent(){

const carousel = document.createElement('div');
const buttonleft = document.createElement('div');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const img4 = document.createElement('img');
const buttonright = document.createElement('div');

//apending

carousel.appendChild(buttonleft);
carousel.appendChild(buttonright);
carousel.appendChild(img1);
carousel.appendChild(img2);
carousel.appendChild(img3);
carousel.appendChild(img4);

//class

carousel.classList.add('carousel');
buttonleft.classList.add('left-button');
buttonright.classList.add('right-button');

//content 

// buttonleft.textContent = '\u25BA';
// buttonright.textContent = '\u25BC';

//add img.src to content 

return carousel;

}


//select parent container 
const carouselContainer = document.querySelector(".carousel-container");

// Appending 

carouselContainer.append(carouselComponent());
