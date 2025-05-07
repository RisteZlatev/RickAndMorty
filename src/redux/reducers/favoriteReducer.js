import {
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    CLEAR_FAVORITES,
} from '../actions/favoriteActions';

const loadFavorites = () => {
    try{
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch(error){
        console.log(error.message);
        return [];
    }
};

const initialState = loadFavorites();

const favoriteReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            if(state.find(fav=> fav.id === action.payload.id)){
                return state;
            }
            return [...state, action.payload];
        case REMOVE_FAVORITE:
            return state.filter(character => character.id !== action.payload);
        case CLEAR_FAVORITES:
            return [];

        default:
            return state;
    }
}

export default favoriteReducer;