# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Links

- Github: https://github.com/PeleaRaul/summary-component-fm/

## My process

1. I downloaded all the contents provided by the challenger!
2. I added the page on github for easy access..
3. I started building the HTML + CSS and made it responsive for mobile.
4. I made the module.js and added the data.json file + built the system.
5. I fixed more design stuff and posted it to github again.

### Built with

- Visual Studio Code
- HTML
- CSS
- JS
- json

### What I learned

```html
<div class="container">
  <div class="left">
    <div class="left-top-text">
      <p class="text">Your Result</p>
    </div>
    <div class="circle">
      <div class="circlescore">
        <p id="score"></p>
      </div>
      <div class="circlescoremax">
        <p>of 100</p>
      </div>
    </div>
    <div class="left-undercircle-text">
      <div id="automatictext"></div>
    </div>
    <div class="bottomautotext">
      <p id="bottomautotext">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  </div>
  <div class="right">
    <div class="summarytext">
      <p class="text">Summary</p>
    </div>
    <div class="results" id="results">
      <div class="resultssmallcontainer1">
        <p>
          <span class="result1image"></span><span id="result1text"></span
          ><span class="resultscore" id="result1score"></span
          ><span class="resultOfHundred">/100</span>
        </p>
      </div>
      <div class="resultssmallcontainer2">
        <p>
          <span class="result2image"></span><span id="result2text"></span
          ><span class="resultscore" id="result2score"></span
          ><span class="resultOfHundred">/100</span>
        </p>
      </div>
      <div class="resultssmallcontainer3">
        <p>
          <span class="result3image"></span><span id="result3text"></span
          ><span class="resultscore" id="result3score"></span
          ><span class="resultOfHundred">/100</span>
        </p>
      </div>
      <div class="resultssmallcontainer4">
        <p>
          <span class="result4image"></span><span id="result4text"></span
          ><span class="resultscore" id="result4score"></span
          ><span class="resultOfHundred">/100</span>
        </p>
      </div>
    </div>
    <button class="btn" id="button">Continue</button>
  </div>
</div>
```

```css
/* CIRCLE */
.circle {
  display: grid;
  place-content: center;
  margin-left: 90px;
  margin-top: 40px;
  background-image: linear-gradient(to bottom, #4e21caaf, #2848d8b7);
  border-radius: 200px;
  width: 200px;
  height: 200px;
}

.circlescore {
  margin-top: 5px;
  font-family: hg-extrabold;
  font-size: 70px;
  color: white;
}

.circlescoremax {
  font-family: hg-medium;
  margin-top: -95px;
  color: rgba(255, 255, 255, 0.432);
}
```

```js
function calcAverage(a, b, c, d) {
  a = result1score;
  b = result2score;
  c = result3score;
  d = result4score;
  return (a + b + c + d) / 4;
}
```

### Continued development

I need to make more projects.
And complete the rest of my course.

### Useful resources

- www.stackoverflow.com - I really recommend this website for Junior Developers to learn. If you forget something, it sure has the answer!

## Author

- Website - [Pelea Raul-Daniel](https://www.eslcs.ro)
- Linkedin - [Pelea Raul-Daniel](https://www.linkedin.com/in/pelearauldaniel/)
- Instagram - [@lilappoo](https://www.instagram.com/lilappoo)
- Discord - [AppoCS] (https://discord.eslcs.ro/)
