import News from './Component/News';
import Navbar from './Component/Navbar';
// able to use this app.import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  
  return (
    <div>
      <Navbar/>
      <News pagesize={5} country="in" category="general" />
      
      
    </div>
  );
}

export default App;

