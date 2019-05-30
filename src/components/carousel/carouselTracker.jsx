import React from 'react';

export const CarouselTracker = (props) => {
  const { numberOfTrackers, activeCard } = props;
  
  const getTrackerIndicators = () => {
    const trackers = [...Array(numberOfTrackers).keys()].map((n, i) => {
      return (
        <div 
          className={`tracker ${activeCard === i ? 'active' : ''}`}
          key={`tracker-${i}`}>
        </div>
      )
    })
    return trackers;
  }

  return (
       <div className="carousel-tracker">
        {getTrackerIndicators()}
      </div>     
  )
}
