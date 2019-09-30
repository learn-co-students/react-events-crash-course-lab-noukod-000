import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX,event.clientY)
  }
  
  myEvent(event){
      if(event.key ==='a'){
        resize("+")
      }else if(event.key === 's'){
        resize("-")
      }
    }
      
  
  render() {
    return (
      <canvas 
        onClick={toggleCycling}
        onKeyPress={(e) => this.myEvent(e)}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
