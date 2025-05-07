export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';

export const addFavorite = (character) => {
  return (dispatch, getState) => {
    dispatch({ type: ADD_FAVORITE, payload: character });
    
    const updatedFavorites = [...getState().favorites];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
};

export const removeFavorite = (characterId) => {
  return (dispatch, getState) => {
    dispatch({ type: REMOVE_FAVORITE, payload: characterId });
    
    const updatedFavorites = getState().favorites.filter(fav => fav.id !== characterId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
};

export const clearFavorites = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_FAVORITES });

    localStorage.removeItem('favorites');
  };
};