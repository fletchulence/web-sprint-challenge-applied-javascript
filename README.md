# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [ ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [ ] Open the assignment in Canvas and click on the "Set up git" option.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Lambda Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

### Instructions

- [ ] Navigate to the root of the project with your command line.
- [ ] Run `npm install` to download the dependencies listed in the `package.json` file.
- [ ] Run `npm start` to compile the project and serve it.
- [ ] Navigate Chrome to `http://localhost:3000`
- [ ] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [ ] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [ ] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [ ] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the *main* branch.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is the DOM?

    - DOM stands for Document Object Model. It is, very basically, a roadmap for what your site will look like. If you would like to append things to the DOM, they will show up in the browser. Objects that are not appended in one way or another to the dom ( or _prepend_ ) will not show to the user.

2. What is an event?

    * An event is very basically a user interaction with the browser. Click, scroll, input - they are all interactive elements which are a huge crux and benefit/plus of javascript. Because of JS, we have this functionality. Events are referred to as triggers because they set off another reaction for JS to respond to.
    
3. What is an event listener?

    * an event listener is something that JS looks for as interaction from the user. If the user clicks, scrolls, types, focuses(tabs into a text input) JS knows to respond in a certain way for UI purposes. For example, if the user wants the user to click on text (in this case), they can do many things to the text as the mouse moves over it (bold text, background change, cursor change). Another example of an eventListener is a click from the user to change the way the browser looks.

4. Why would we convert a NodeList into an Array?

    -We would convert a NodeList into an Array so that we can perform array methods on it. The purposes of converting a nodelist into an array is for functionality and usability. While NodeList is a list of items in the format of an array, you cant use the correct array methods that you would want to


5. What is a component?

    - a component is basically a function that does something specific. Meaning the handle one peice of information in a larger part of the whole. We have the ability to edit, build as many components as we see fit using loops if we wish to. 
    "modular piece of code"
