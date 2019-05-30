import React from 'react';

export const CarouselTracker = (props) => {
  const { numberOfTrackers, activeCard } = props;
  const getTrackerIndicators = () => {
    let trackers = [];

    for (var i = 1; i <= numberOfTrackers; i++) {
      trackers.push(
        <div 
          className={`tracker ${activeCard === i-1 ? 'active' : ''}`}
          key={`tracker-${i}`}>
        </div>
      );
    }
    return trackers;
  }

  return (
       <div className="carousel-tracker">
        {getTrackerIndicators()}
      </div>     
  )
}
