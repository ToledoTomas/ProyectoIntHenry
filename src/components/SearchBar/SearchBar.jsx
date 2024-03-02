import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
  
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const clearInput = () => {
      setId("");
   }

   return (
      <div className={style.div}>
         <input onChange={handleChange} placeholder='Introduzca ID del personaje' className={style.input} value={id} type='search' />
         <button className={style.boton} onClick={()=>{onSearch(id); clearInput()}}>Agregar</button>
      </div>
   );
}
