import style from './Card.module.css'

export default function Card(props) {
   return (
      <div className={style.divCard}>
         <button className={style.boton} onClick={props.onClose}>X</button>
         <img src={props.image} alt={`Imágen de ${props.name}` } className={style.imagen} />
         <h2 className={style.nombre}>{props.name}</h2>
         <div className={style.containerInfo}>
         <h2 className={style.info}>{props.status}</h2>
         <h2 className={style.info}>{props.species}</h2>
         <h2 className={style.info}>{props.gender}</h2>
         {/* <h2 className={style.info}>{props.origin.name}</h2> */}
         </div>
      </div>
   );
}
