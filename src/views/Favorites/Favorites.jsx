import { connect } from "react-redux";
import Cards from '../../components/Cards/Cards';

const Favorites = ({myFavorites}) => {
    return (
        <>
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