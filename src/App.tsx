import React from 'react';

import './App.scss';
import Categories from './containers/Categories/Categories';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Carousel from './containers/Carousel/Carousel';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <Carousel />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
