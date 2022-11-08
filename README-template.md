# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript DOM manipulation

### What I learned

The most important part of this project for me was the form validation. I learned about the `checkValidity()` and  `setCustomValidity()` methods, which were not used in the final version but can be useful when working with the browser's validation and validation messages.
I came across a whole new topic called "regular expressions" and applied this tool, along with the `test()` method, to validate a string (like an email address) according to determined characters that it must include (like the "@" symbol). Example:

```js
function validation() {
  const emailPattern = /\w@\w/;
  const email = document.getElementById("email").value;

  if(!emailPattern.test(email)) {
      validationMessageEl.textContent = "Please enter a valid email";
  }
}
```

### Continued development

The regular expression that I used was pretty basic but I can see how future projects may need a deeper understanding of this tool and how to use the various special characters.

### Useful resources

- [CSS Outline](https://www.w3schools.com/css/css_outline.asp)
- [CSS background-repeat Property](https://www.w3schools.com/cssref/pr_background-repeat.php)
- [JavaScript Validation API](https://www.w3schools.com/js/js_validation_api.asp)
- [JavaScript RegExp test()](https://www.w3schools.com/jsref/jsref_regexp_test.asp)
- [JavaScript Form Validation](https://www.youtube.com/watch?v=In0nB0ABaUk&ab_channel=WebDevSimplified)
- [Learn Regular Expressions In 20 Minutes](https://www.youtube.com/watch?v=rhzKDrUiJVk&ab_channel=WebDevSimplified)

## Author

- GitHub - [Daniel77apr](https://github.com/Daniel77apr)
- Frontend Mentor - [@Daniel77apr](https://www.frontendmentor.io/profile/Daniel77apr)