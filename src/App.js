import React/** , { useState }*/ from 'react';
import './App.css';
import Routes from "./Routes";
import Nav from './Nav';

/** App: Component that renders Nav and Routes
 *    - Holds state of idToPost, an object of post objects,
 *      each of which have a key of comments, an object of comment objects
 *    - Used in Index component
 */

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes/>
    </div>
  );
}

export default App;
