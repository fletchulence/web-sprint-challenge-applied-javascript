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

const headline = article.headline;
const authorPhoto = article.authorPhoto;   
const authorName = article.authorName;

  const cardContainer = document.createElement('div');
  const title = document.createElement('div');
  const author = document.createElement('div');
  const imgCont = document.createElement('div');
  const img = document.createElement('img');            
  const span = document.createElement('span');         
  
  title.textContent = headline;
  span.textContent = `By ${authorName}`;
  img.setAttribute('src', '');                         
  img.src = authorPhoto;

  cardContainer.classList.add('card');
  title.classList.add('headline');
  author.classList.add('author');
  imgCont.classList.add('img-container');
      
    cardContainer.appendChild(title);
    cardContainer.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    author.appendChild(span);
    
      cardContainer.addEventListener('click', ((evt) =>{
        console.log(headline);
        evt.stopPropagation();
      }));
    
  return cardContainer;
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
   const iWantThisToWork = document.querySelector(selector)
   axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      // console.log(res.data.articles);
      const obj = (res.data.articles);
      
      Object.keys(obj).forEach((key1, arr1) => {
      //  console.log( obj[key1])
      //  console.log(arr1)
      
       for (let i=0; i < arr1.length; i++){
         const tabTitles = Card(arr1[i]);
         iWantThisToWork.appendChild(tabTitles);
       }

       for (let i=0; i < obj[key1].length; i++){
         const headlines = Card(obj[key1][i]);
        //  console.log(headlines)
         iWantThisToWork.appendChild(headlines);
       }
       
      })
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      console.log('well its going thry=u')
    })
   
  }
  
export { Card, cardAppender }

