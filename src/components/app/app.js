import React from 'react';

import ProductsList from './../products-list';
import Header from './../header'; 

import './../../../node_modules/normalize.css/normalize.css';
import './app.less';

const App = () => {
  return(
    <main className="app">
      <Header />
      <ProductsList />
    </main>
  );
};

export default App;