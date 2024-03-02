import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx';

function App() {

   const [characters, setCharacters] = useState([]);

   function  onClose (id) {
      let filterCharacters = characters.filter((character)=>{return character.id 
         !== id})

      setCharacters(filterCharacters);
      }

   function onSearch(id) {
      axios(`https://rym2.up.railway.app/api/character/${id}?key={pi-toledo-tomas}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/detail/:id" element={<Detail />}/>
         </Routes>
      </div>
   );
}

export default App;
