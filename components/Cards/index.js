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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {

const articles = Object.keys(response.data.articles);

for (let i = 0; i < articles.length; i++) {
        response.data.articles[articles[i]].forEach(element => {
         new Card(element);  
        });
}


console.log(articles);
console.log(response.data);
})

//new keyword creates a new instances of our component- can have as manny as we want. It is a clone. We declare the component once and can use the keyword as many times as we want. 

//.data will always be in response, we have to use it to access the data
//http status codes are messages telling us what issue is

function Card(obj){
    
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

   imageurl.setAttribute('src', `${obj.authorPhoto}` )
  headline.textContent = `${obj.headline}`
  authorname.textContent = `${obj.authorName}`

   return card

}


