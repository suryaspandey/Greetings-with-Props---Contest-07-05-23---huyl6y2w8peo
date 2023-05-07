import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  const name = "Surya";
  return (
    <Welcome name={name} />
  )
}


export default App;
