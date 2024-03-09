import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About/About.jsx'
import Detail from './views/Detail/Detail.jsx';
import Form from './views/Form/Form.jsx';

function App() {

   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();

   const { pathname } = useLocation();

   const [access, setAccess] = useState(false);

   const EMAIL = "tomas@gmail.com";

   const PASSWORD = "pass123";

   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate('/home')
      }
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
         {pathname !== "/" ? <Nav onSearch={onSearch}/> : null}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/> 
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/detail/:id" element={<Detail />}/>
         </Routes>
      </div>
   );
}

export default App;
