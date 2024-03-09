import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(
      `https://rym2.up.railway.app/api/character/${id}?key=pi-toledo-tomas`
    ).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.divCard}>
      <img
        src={character.image}
        alt={`Imágen de ${character.name}`}
        className={style.imagen}
      />
      <Link to={`/detail/${id}`}>
        <h2 className={style.nombre}>{character.name}</h2>
      </Link>
      <div className={style.containerInfo}>
        <h2 className={style.info}>{character.status}</h2>
        <h2 className={style.info}>{character.species}</h2>
        <h2 className={style.info}>{character.gender}</h2>
        {/* <h2 className={style.info}>{origin.name}</h2> */}
      </div>
    </div>
  );
};

export default Detail;
