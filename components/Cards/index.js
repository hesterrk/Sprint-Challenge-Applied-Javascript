// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
// //
// {/* <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div> */}
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles');



//do something here with data from article

function Card(){
    
    const cardsContainer = document.querySelector('.cards-container');
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imagecontainer = document.createElement('div');
    const imageurl = document.createElement('img');
    const authorname = document.createElement('span');

   cardsContainer.appendChild(card);
   card.appendChild(headline);
   card.appendChild(author);
   author.appendChild(imagecontainer);
   imagecontainer.appendChild(imageurl);
   author.appendChild(authorname);

   card.classList.add('card');
   headline.classList.add('headline');
   author.classList.add('author');
   imagecontainer.classList.add('img-container');



   return card



}

Card()