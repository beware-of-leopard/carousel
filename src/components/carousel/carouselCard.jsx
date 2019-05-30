import React, { useEffect } from 'react';

export const CarouselCard = (props) => {
    const { headline, copy, cta } = props;
    useEffect(() => {
        const carouselCard = document.querySelector('.carousel-card');
        setTimeout(() => {
            carouselCard.classList.add('show');
        }, 500)
        return function cleanup () {
            carouselCard.classList.remove('show');
        }
    })
    return (
        <div className='carousel-card'>
            <h2>{headline}</h2>
            <p>{copy}</p>
            <button className="btn btn-primary btn-lg">{cta}</button>
        </div>
    )
}