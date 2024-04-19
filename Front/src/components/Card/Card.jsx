import { addFav, removeFav } from "../../redux/actions";
import style from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  image,
  id,
  name,
  status,
  species,
  gender,
  origin,
  onClose,
  agregarFavorito,
  removerFavorito,
  myFavorites,
}) {
  
   const [isFav, setIsFav] = useState(false);

   const { pathname } = useLocation();

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

  const handleFavorite = () => {
    isFav
      ? removerFavorito(id)
      : agregarFavorito({ id, name, status, species, image, gender });
    setIsFav(!isFav);
  };

  return (
    <div className={style.divCard}>

      { pathname !== "/favorites" 
      ? <div className={style.divBoton}>
        <button className={style.boton} onClick={() => onClose(id)}>
          X
        </button>
      </div> 
      :
      null}

      <img src={image} alt={`Imágen de ${name}`} className={style.imagen} />
      <Link to={`/detail/${id}`}>
        <h2 className={style.nombre}>{name}</h2>
      </Link>

      {isFav ? (
        <button onClick={handleFavorite} className={style.fav}>❤️</button>
      ) : (
        <button onClick={handleFavorite} className={style.fav}>🤍</button>
      )}

      <div className={style.containerInfo}>
        <h2 className={style.info}>{status}</h2>
        <h2 className={style.info}>{species}</h2>
        <h2 className={style.info}>{gender}</h2>
        {/* <h2 className={style.info}>{origin.name}</h2> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    agregarFavorito: (character) => {
      dispatch(addFav(character));
    },
    removerFavorito: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
