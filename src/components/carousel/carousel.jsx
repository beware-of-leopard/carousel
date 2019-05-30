import React, { useState } from 'react';
import { useInterval } from '../../hooks';
import { CarouselTracker } from './carouselTracker';

export const Carousel = (props) => {
  const [ currentDisplay, updateCurrentDisplay ] = useState(0)
  const [ secondsTillSwitch, updateSecondsTillSwitch ] = useState(5)

  useInterval(() => {
      if (secondsTillSwitch <= 0) {
        routeNext()
        updateSecondsTillSwitch(5)
      } else {
        updateSecondsTillSwitch(secondsTillSwitch - 1)
      }
  }, 1000)

  const routeNext = () => {
      updateSecondsTillSwitch(5)
      if (currentDisplay >= props.children.length - 1) {
        updateCurrentDisplay(0)
      } else {
        updateCurrentDisplay(currentDisplay + 1) 
      }
  }

  const routePrevious = () => {
    updateSecondsTillSwitch(5)
    if (currentDisplay <= 0) {
        updateCurrentDisplay(props.children.length - 1)
    } else {
      updateCurrentDisplay(currentDisplay - 1);      
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-last" onClick={routePrevious}>&lt;</div>
        {props.children[currentDisplay]}
      <div className="carousel-next" onClick={routeNext}>&gt;</div>
      <CarouselTracker numberOfTrackers={props.children.length} activeCard={currentDisplay}/>
    </div>
  )
}