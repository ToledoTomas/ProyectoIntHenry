import { connect, useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import style from "./Favorites.module.css";

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={style.containerFilter}>
        <label htmlFor="Order">Filtrar por orden:</label>
        <select className={style.select} onChange={handleOrder}>
          <option value="A">Ascendant</option>
          <option value="D">Descendant</option>
        </select>

        <label htmlFor="Filter">Filtrar por género:</label>
        <select className={style.select} onChange={handleFilter}>
          <option value="ALL">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <Cards characters={myFavorites} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
