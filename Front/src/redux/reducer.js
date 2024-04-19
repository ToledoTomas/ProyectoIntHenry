import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

function rootReducer (state = initialState, action) {
    switch (action.type){

        // case ADD_FAV:
        //     return{
        //     ...state,
        //     myFavorites:[...state.myFavorites, action.payload],
        //     allCharacters:[...state.allCharacters, action.payload]};

        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        // case REMOVE_FAV:
        //     return {
        //     ...state, myFavorites:state.myFavorites.filter(
        //     (char) => char.id !== Number(action.payload)
        //     )};

        case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };

        case FILTER:
            const filteredCharacters = 
            action.payload === "ALL" 
            ? state.allCharacters
            : state.allCharacters.filter(char => {
                return char.gender === action.payload
            });

            return{
                ...state,
                myFavorites:filteredCharacters,
            }

        case ORDER:
            const orderFavs = state.myFavorites.sort((a,b)=>{
                return action.payload === "A" ? a.id - b.id : b.id - a.id
            })

            return{
                ...state,
                myFavorites:orderFavs
            }

        default: 
        return {...state}
    }
}

export default rootReducer;
