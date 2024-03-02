import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({image, id, name, status, species, gender, origin, onClose}) {
   return (
      <div className={style.divCard}>
         
         <div className={style.divBoton}>
         <button className={style.boton} onClick={()=>onClose(id)}>X</button>
         </div>
         
         <img src={image} alt={`Imágen de ${name}` } className={style.imagen} />
         <Link to={`/detail/${id}`}>
            <h2 className={style.nombre}>{name}</h2>
         </Link>
         <div className={style.containerInfo}>
         <h2 className={style.info}>{status}</h2>
         <h2 className={style.info}>{species}</h2>
         <h2 className={style.info}>{gender}</h2>
         {/* <h2 className={style.info}>{origin.name}</h2> */}
         </div>
      </div>
   );
}
