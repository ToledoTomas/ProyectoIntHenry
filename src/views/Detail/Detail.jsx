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
    <div className={style.container}>

      <div className={style.containerLeft}>
        <h2 className={style.h2}>ID: {<span className={style.span}>{character.id}</span>}</h2>
        <h2 className={style.h2}>Name: {<span className={style.span}>{character.name}</span>}</h2>
        <h2 className={style.h2}>Status: {<span className={style.span}>{character.status}</span>}</h2>
        </div>

        <div>
        <img
          src={character.image}
          alt={`Imágen de ${character.name}`}
          className={style.imagen} />
        </div>

      <div className={style.containerRight}>
        <h2 className={style.h2}>Species: {<span className={style.span}>{character.species}</span>}</h2>
        <h2 className={style.h2}>Gender: {<span className={style.span}>{character.gender}</span>}</h2>
        <h2 className={style.h2}>Origin: {<span className={style.span}>{character.origin?.name}</span>}</h2>
      </div>

    </div>
  );
};

export default Detail;
