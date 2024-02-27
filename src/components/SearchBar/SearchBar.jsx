import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   return (
      <div className={style.div}>
         <input placeholder='Introduzca ID del personaje' className={style.input} type='search' />
         <button className={style.boton} onClick={onSearch}>Agregar</button>
      </div>
   );
}
