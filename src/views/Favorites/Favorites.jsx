import { connect, useDispatch } from "react-redux";
import Cards from '../../components/Cards/Cards';
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({myFavorites}) => {

    const [aux, setAux] = useState(false);

    
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <>
        <label htmlFor="Order">Filtrar por orden:</label>
        <select onChange={handleOrder}>
            <option value="A">Ascendant</option>
            <option value="D">Descendant</option>
        </select>

        <label htmlFor="Filter">Filtrar por género:</label>
        <select onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unkown">Unknown</option>
        </select>

        <Cards characters={myFavorites}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps)(Favorites);