import './App.css';
import { useState, useEffect } from "react"
import ApiCalling from './components/ApiCalling/ApiCalling';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <ApiCalling />
    </div>
  );
}

export default App;
