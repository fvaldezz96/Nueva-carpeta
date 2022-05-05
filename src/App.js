import React from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct";


function App() {

  return (
    <div calssName="App">

      Henry Commerce

      <Route path='/' render={() => <Nav />} />

      <Route  path='/' exact render={() => <Home />} />

      <Route exact path='/product/:id' component={() => <ProductDetail />} />

      <Route exact path='/products/create' component={() => <CreateProduct />} />

    </div>
  )

}
export default App;
