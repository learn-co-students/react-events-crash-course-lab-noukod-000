import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'
import ChromeBoisDomain from '../src/ChromeBoisDomain'


describe('<ChromeBoisDomain />', () => {
  
  let comp
  
  beforeEach(() => {
    comp = shallow(<ChromeBoisDomain />)
  })
  
  it('invokes the `drawChromeBoiAtCoords` method within `handleMouseMove`, passing the captured x and y values of the mouse from the event', () => {
    const event = {
      clientX: 33,
      clientY: 44
    }
    // spy on `drawChromeBoiAtCoords` here?
    comp.handleMouseMove(event)
    expect().to.equal(true)
  })
  
  it('has an event listener for clicks on the <canvas> element', () => {
    // check for event listener on canvas element
    expect().to.equal(true)
  })
  
  it('when the click listener is activated, `toggleCycling` is invoked', () => {
    // spy on `toggleCycling` here?
    
    expect().to.equal(true)
  })
  
  it('has an event listener for key presses on the <canvas> element', () => {
    // allow multiple events here onKeyPress/down/up/w/e?
    expect().to.equal(true)
  })
  
  it('when a key is pressed, `resize` is invoked', () => {
    // spy on `resize` here?
    expect().to.equal(true)
  })
  
  it("when the 'a' key is pressed, `resize` is invoked with the argument of '+'", () => {
    // spy on `resize` here?
    expect().to.equal(true)
  })
  
  it("when the 's' key is pressed, `resize` is invoked with the argument of '-'", () => {
    // spy on `resize` here?
    expect().to.equal(true)
  })
  
})
