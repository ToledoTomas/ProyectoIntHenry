import Card from "../Card/Card";
import style from './Cards.module.css'

export default function Cards({ characters }) {
  return (
    <div className={style.div}>
      {characters.map((personaje) => {
        return (
          <Card
            key={personaje.id}
            onClose={() => window.alert("Emulamos que se cierra la card")}
            {...personaje}
          />
        );
      })}
    </div>
  );
}
