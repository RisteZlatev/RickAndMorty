import { combineReducers } from "redux";
import characterReducer from "./characterRecuer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
    characters: characterReducer,
    favorites: favoriteReducer,
});

export default rootReducer;