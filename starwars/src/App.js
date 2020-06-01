
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
      console.log(response);
      setCharacters(response.data.results);
      console.log(response.data.results);
    })
    .catch(error => {
      console.log(error)
    })
  }, [])


return (
  <div className = "app">
    <Character  characters = {characters}/>
  </div>

  );
}
export default App;