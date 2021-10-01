import axios from 'axios';

// const tabs = 

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
  const topicsMainD = document.createElement('div');
    topicsMainD.classList.add('topics');
    
  topics.forEach(el => {
    const tab = document.createElement('div');
      tab.classList.add('tab');
      tab.textContent = el;
      topicsMainD.appendChild(tab);
   });

  //console.log(topics)
  console.log(topicsMainD)
  return topicsMainD;
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
      const promise = Tabs(res.data.topics); //! invoke the function above on the correct data and console.log result in Tab
      
      //! now append
      const tab = document.querySelector(selector)
        tab.appendChild(promise)
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() =>{
      console.log('who can do this')
    })
  
  return tabData;
}

export { Tabs, tabsAppender }


