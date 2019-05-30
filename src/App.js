import React from 'react';
import './App.scss';
import { Navigation } from './components/navigation/navigation';
import { FeaturedContent } from './components/featuredContent/featuredContent';
import { CallToActionCards } from './components/ctaCards/ctaCards';
import { CarouselCard } from './components/carousel/carouselCard';
import { Carousel } from './components/carousel/carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div className="carousel">
        <Carousel>
          <CarouselCard 
            headline="Example headline"
            copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at metus cursus, lobortis massa ac."
            cta="Find out more."
          />
          <CarouselCard 
            headline="Here's a second headline"
            copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at metus cursus, lobortis massa ac."
            cta="Click here."
          />
          <CarouselCard 
              headline="I'm a headline too"
              copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at metus cursus, lobortis massa ac."
              cta="Click for more."
            />
        </Carousel>
      </div>
      <main>
        <CallToActionCards />
        <FeaturedContent />
      </main>
      <footer>
        <div className="footer-container">
          <div className="terms">
            <div>&copy; 2017-2018 Company Inc</div>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
          <div><a href="#top">Back to top</a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
