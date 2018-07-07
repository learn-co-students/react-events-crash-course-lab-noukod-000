# React Props Movie Lab


## Objectives

1. Practice affixing and handling Synthetic Events in React
2. Have fun with an absolute [legend][legend]


## Introduction

Let's jump right into a React application and add event capturing + handling
functionality. We have a simple single component application that renders a
900x600 canvas. All of our work will be done in `src/ChromeBoisDomain.js`. 

For this lab, minimal guidance will be given. If you run into trouble, you are
expected to reference the React Crash Course ReadMe lesson and React
documentation on events:

- [React Synthetic Events](https://reactjs.org/docs/events.html)
- [Handling Events](https://reactjs.org/docs/handling-events.html)
- [Supported Events](https://reactjs.org/docs/events.html#supported-events)


## Deliverables

- Finish implementing the `handleMouseMove` method. This method should capture the `x` and `y` coordinates of the mouse from the event and use them to invoke the `drawChromeBoiAtCoords` function that has been provided and is already imported (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
- Add an event listener to the `<canvas>` element to capture a click. Create an event handler which, when fired, invokes the provided `toggleCycling` function (with no arguments)
- Add an event listener to the `<canvas>` element to capture when a key is pressed. When a key is pressed, an event handler should invoke the the provided `resize` function with a single argument of either '+' or '-':
  - If the key pressed was 'a', then it should call `resize` with '+'
  - If the key pressed was 's', then it should call `resize` with '-' 


#### Once Finished

`npm start` and assert the following expected behavior:

- As the mouse moves around the canvas element in the browser, ChromeBoi is constantly drawn to the screen
- If the user clicks on the canvas, ChromeBoi begins cycling colors as he is drawn
- If the user presses either 'a' or 's' (while the canvas is on focus), ChromeBoi begins drawing either larger or smaller


## Resources
- [React Synthetic Events](https://reactjs.org/docs/events.html)
- [Handling Events](https://reactjs.org/docs/handling-events.html)
- [Supported Events](https://reactjs.org/docs/events.html#supported-events)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-events-crash-course-lab'>React Events Crash Course Lab</a> on Learn.co and start learning to code for free.</p>

[legend]: https://en.wikipedia.org/wiki/Draft:Chrome_Boi
