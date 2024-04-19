import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About/About.jsx'
import Detail from './views/Detail/Detail.jsx';
import Form from './views/Form/Form.jsx';
import Favorites from './views/Favorites/Favorites.jsx'

function App() {

   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();

   const { pathname } = useLocation();

   const [access, setAccess] = useState(false);

   const EMAIL = "tomas@gmail.com";

   const PASSWORD = "pass123";

   // const login = (userData) => {
   //    if(userData.password === PASSWORD && userData.email === EMAIL){
   //       setAccess(true);
   //       navigate('/home')
   //    }
   // };

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function  onClose (id) {
      let filterCharacters = characters.filter((character)=>{return character.id 
         !== id})

      setCharacters(filterCharacters);
      }

   // function onSearch(id) {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
   //       ({ data }) => {
   //          if (data.name) {
   //             setCharacters((oldChars) => [...oldChars, data]);
   //          } else {
   //             window.alert('¡No hay personajes con este ID!');
   //          }
   //       }
   //    );
   // }

   async function onSearch(id) {
      try {
         
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

         setCharacters((oldChars) => [...oldChars, data]);

      } catch (error) {
         
         window.alert('¡No hay personajes con este ID!');
      }   
         
      }

   return (
      <div className='App'>
         {pathname !== "/" ? <Nav onSearch={onSearch}/> : null}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/> 
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/detail/:id" element={<Detail />}/>
            <Route path="/favorites" element={<Favorites />}/>
         </Routes>
      </div>
   );
}

export default App;
