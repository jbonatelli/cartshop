import React from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { ProductList } from './views/Products'
import { ProductComponent } from './views/Product'

function App() {
  return (
    <div id="main-app">
      <h1>Loja de Muambas</h1>
      <BrowserRouter>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/Products/:id" component={ProductComponent} />
      </BrowserRouter>
    </div>
  );
}

export default App;
