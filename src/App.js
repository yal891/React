import React from "react";
import { BrowserRouter } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import './App.css';

function App() {
  return (
      //for test running only
    <div className="App">
      <header className="App-header">
        hello
      </header>
    </div>

    // <BrowserRouter>
    //     <Auth className="frontend" />
    // </BrowserRouter>
  );
}

export default App;
