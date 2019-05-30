import React, { useEffect } from 'react';

export const Navigation = (props) => {
    useEffect(() => {
        const menuIcon = document.querySelector('.navbar.navbar-dark.bg-dark');
        const navOptions = document.querySelector('.nav-options');
        menuIcon.addEventListener('click', () => {
            navOptions.classList.toggle('show');
        })
    })
    return (
        <nav>
          <div className="nav-header">
            <h1 id="top">Carousel</h1>
            <div className="navbar navbar-dark bg-dark">
              <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div className="nav-options">
            <div className="nav-links">
              <a href="#top" className="btn btn-default btn-lg selected" role="button">Home</a>
              <a href="#top" className="btn btn-default btn-lg" role="button">Link</a>
              <a href="#top" className="btn btn-default btn-lg disabled" role="button">Disabled</a>
            </div>
            <div className="search">
              <input label="search"></input><button className="btn btn-outline-success">Search</button>
            </div>
          </div>
        </nav>
    )
}