import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/counter/Counter';
import Gallery from './Components/gallery/Gallery';
import About from './Components/about/About';
import GalleryItemDetails from './Components/gallery/GalleryItemDetails';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-brand m-2">
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/conter">Counter</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
      <div className="container mt-2">
        <Switch>
          <Route exact path="/gallery" component={Gallery}></Route>
          <Route exact path="/counter" component={Counter}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/home"></Route>
          <Route exact path="/galleryDetails/:id" component={GalleryItemDetails}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
