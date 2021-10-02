import axios from "axios";
//import Tabs from './tabs';



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
  const img = document.createElement('img');            //TODO: there needs to be an img.src in here
  const span = document.createElement('span');          //TODO: make sure you add the string in here
  
  title.textContent = headline;
  span.textContent = `By ${authorName}`;
  img.setAttribute('src', '');                          //TODO: what is authorPhoto
  img.src = authorPhoto;

  cardContainer.classList.add('card');
  title.classList.add('headline');
  author.classList.add('author');
  imgCont.classList.add('img-container');

    // article.forEach(elem =>{ 
      
    cardContainer.appendChild(title);
    cardContainer.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    author.appendChild(span);
    
      cardContainer.addEventListener('click', ((evt) =>{
        evt.stopPropagation();
        console.log(evt.target.headline);
      }));

  // }); 
  //console.log(cardContainer);
    
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
      console.log(res.data.articles);
      const obj = (res.data.articles);
      
      Object.keys(obj).forEach((key1, index1, arr1) => {
       console.log(key1, obj[key1])
       console.log(arr1)
      
     arr1.forEach( element1 => {
        console.log(Card(element1))

        return arr1;
      })







      // const obj = res.data.articles;
      //console.log(obj);
      

        //  arr1.forEach(element =>{
        //    res.data.articles[element]
        //    console.log(element)
        //  })

         return document.querySelector(selector).appendChild(arr1.forEach(Card(cardContainer)))
          //  arr1.forEach((key2, index2, arr2) =>{
          //   console.log(arr2)

            // arr2.forEach
            
          // })
          //return obj;
        })
                        
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      console.log('well its going thry=u')
    })
    
    //console.log(objInfo)
    
    //return objInfo;
    // return iWantThisToWork;
  }
  
export { Card, cardAppender }



/*
  for(let i = 0; i < data.length)
 */