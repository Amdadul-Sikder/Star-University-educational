import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Hero></Hero>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Hero></Hero>
            <Home></Home>
            <Footer></Footer>
          </Route>

          <Route path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>

          <Route path="/services">
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route path="/contact">
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <Header></Header>
            <NotFound></NotFound>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
