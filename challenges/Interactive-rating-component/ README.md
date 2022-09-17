# Frontend Mentor - Interactive rating component solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/screenshot.png =250x) ![](./images/screenshot3.png =250x) ![](./images/screenshot2.png =250x)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Although this is a small component - a form for users to submit ratings for the use of products/services, I still learnt a lots from this project, such as responsive design, DOM and some specific CSS techniques.

In terms of CSS techniques, I learnt how to change the given default style of `<input type="radio"/>` into a button-like selection with hover and checked effect. To achieve this, follow the below steps:

- Set `radio` as fixed position, so each radio button will overlap with its `label`
- Make each radio button as smallest as possible by setting width size 0
- Make `radio` invisible with opacity 0%

```css
input[type='radio'] {
  opacity: 0;
  position: fixed;
  width: 0;
}
```

- When `radio` is hovered over, the css rule applies to its adjacent sibling `label`

```css
input[type='radio']:hover + label {
  background-color: hsl(216, 12%, 54%);
  color: white;
}
```

- When `radio` is checked off, the css rule applies to its adjacent sibling `label`

```css
input[type='radio']:checked + label {
  background-color: hsl(25, 97%, 53%);
  color: white;
}
```
