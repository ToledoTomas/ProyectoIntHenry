import style from "./About.module.css";
import logo from "./Icono-AboutMe.png";

const About = () => {
  return (
    <>
      <h1 className={style.title}>About Me</h1>
      <hr />
      <div className={style.containerAll}>
        <div className={style.containerP}>
          <p className={style.paragraph}>
            Esto es un ejemplo de la sección de About Me. Quiero aclarar que los
            estilos de este proyecto integrador, se realizaron hasta donde el
            tiempo libre lo permitió.
          </p>
          <p className={style.paragraph}>
            Espero que les sea de su agrado el contenido del resto de la App, y
            lo puedan disfrutar tanto como a mi, al realizarla.
          </p>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
            cupiditate atque, fugit, nesciunt odit esse quidem sint ad obcaecati
            non impedit commodi explicabo quod numquam earum molestias quo
            itaque ipsum delectus voluptates? Dignissimos iure laudantium
            dolorum architecto distinctio omnis maiores autem aliquam voluptatem
            nemo fugit enim, consequuntur ex? Ratione, excepturi?
          </p>
        </div>
        <aside>
          <img className={style.image} src={logo} alt="Logo About Me" />
        </aside>
      </div>
    </>
  );
};

export default About;
