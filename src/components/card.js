import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  
  //article.forEach(el => {
    const cardContainer = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');            //TODO: there needs to be an img.src in here
    const span = document.createElement('span');          //TODO: make sure you add the string in here

    cardContainer.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    headline.textContent = article.headline;
    span.textContent = `By ${article.authorName}`;
    
    img.setAttribute('src', '');                          //TODO: what is authorName
    img.src = article.authorPhoto;

    cardContainer.appendChild(headline);
    cardContainer.appendChild(author);
    author.appendChild(imgCont);
    author.appendChild(span);
    imgCont.appendChild(img);
    
    cardContainer.addEventListener('click', (() =>{
      console.log(headline)
    }));
    
    
    console.log(cardContainer);
    return cardContainer;
  //})

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const arrayInfo = axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      console.log(res.data.articles.javascript[0]);
      const array = (res.data.articles.javascript);
      const promise = Card(array[0]);
      //console.log(arrayTabs);  
      
      
      //todo "javascript"
      
      
      //todo "bootstrap"
      
      
      //todo "technology"
      
      
      //todo "jquery"
      
      
      //todo "node.js"
      
      
      document.querySelector(selector).appendChild(promise)
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      console.log('well its going thry=u')
    })
    
    return arrayInfo;
  }
  
export { Card, cardAppender }
