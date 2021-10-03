import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its //!only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
 
      //! create the outer div and call it mainDiv
  const mainDiv = document.createElement('div');
    mainDiv.classList.add('topics');
    
      //! iterate array of topics for var called tabContent such that what comes in is what goes out
      //! i guess i could have done it one by one, but this was way more fun
  topics.forEach(el => {
    const tabContent = document.createElement('div');  //* creating a tabContent var which will fill the mainDiv with the properly iterated information
      tabContent.classList.add('tab');          //* div.tab
      tabContent.textContent = el;             //* whatever gets put in is what gets spat out as content
      mainDiv.appendChild(tabContent);         //* appending tabContent container to mainDiv of our 
      //FOR STRETCH:
      tabContent.addEventListener('click', function(event) {
        //el.stopPropagation()
        console.log(el)
        
        //return event.el.classList.toggle('cards.container');
      })
      
   });

  //console.log(mainDiv)      //TODO: check to make sure the output of the largest container is/has what you want
  return mainDiv;
}


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  
  const tabData = axios.get(`http://localhost:5000/api/topics`)
    .then(res => {
      //console.log(res.data.topics);
      //! invoke Tab function on the correct data and put it into something called promise
      const promise = Tabs(res.data.topics); 
      
      const tab = document.querySelector(selector); //! now direct the function and data where to go
        
      tab.appendChild(promise);   //! APPEND it!
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() =>{
      console.log('its wOrKiNg!')      //? is this thing on??
    })
  
  return tabData;   
  //* the above return helped me view how the promise was coming out
  //? are there other ways to do it? 
}

export { Tabs, tabsAppender }


