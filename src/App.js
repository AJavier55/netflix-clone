import React from "react"
import './App.css'
import requests from "./requests"
import Row from "./Row";
import Banner from "./Banner"
import Nav from "./Nav"


function App() {
  return (
    <div className="App">

      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
       
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      
    </div>
  );
}

export default App;
