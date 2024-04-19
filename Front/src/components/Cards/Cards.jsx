import Card from "../Card/Card";
import style from './Cards.module.css'

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.div}>
      {characters.map((personaje) => {
        return (
          <Card
            key={personaje.id}
            onClose={onClose}
            {...personaje}
          />
        );
      })}
    </div>
  );
}
