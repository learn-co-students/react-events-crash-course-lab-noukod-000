import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const [x, y] = [event.clientX, event.clientY]
    console.log(`Moving ${x}, ${y}`)
    drawChromeBoiAtCoords(x,y)
    // or 
    //    drawChromeBoiAtCoords(event.clientX, event.clientY)

  }

  handleKeyPress = (e) => {
    if(e.key === "a"){
      console.log('resize up')
      resize('+')
    }else if(e.key ==="s"){
      console.log('resize down')
      resize('-')
    }
  }

  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}