import React from "react"
import './App.css';
import requests from "./requests";
import Row from "./Row"


function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Netflix Originals"/>
      
    </div>
  );
}

export default App;
