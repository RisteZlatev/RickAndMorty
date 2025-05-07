export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';
export const FETCH_CHARACTER_DETAILS_REQUEST = 'FETCH_CHARACTER_DETAILS_REQUEST';
export const FETCH_CHARACTER_DETAILS_SUCCESS = 'FETCH_CHARACTER_DETAILS_SUCCESS';
export const FETCH_CHARACTER_DETAILS_FAILURE = 'FETCH_CHARACTER_DETAILS_FAILURE';
export const SEARCH_CHARACTERS_REQUEST = 'SEARCH_CHARACTERS_REQUEST';
export const SEARCH_CHARACTERS_SUCCESS = 'SEARCH_CHARACTERS_SUCCESS';
export const SEARCH_CHARACTERS_FAILURE = 'SEARCH_CHARACTERS_FAILURE';

export const fetchCharacters = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CHARACTERS_REQUEST });

    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();

      dispatch({
        type: FETCH_CHARACTERS_SUCCESS,
        payload: data.results
      });
    } catch (error) {
      dispatch({
        type: FETCH_CHARACTERS_FAILURE,
        payload: error.message || 'Failed to fetch characters'
      });
    }
  };
};

export const fetchCharacterDetails = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CHARACTER_DETAILS_REQUEST });

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();

      dispatch({
        type: FETCH_CHARACTER_DETAILS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: FETCH_CHARACTER_DETAILS_FAILURE,
        payload: error.message || 'Failed to fetch character details'
      });
    }
  };
};

export const searchCharacters = (searchTerm) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_CHARACTERS_REQUEST, payload: searchTerm });

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();

      dispatch({
        type: SEARCH_CHARACTERS_SUCCESS,
        payload: data.results
      });
    } catch (error) {
      dispatch({
        type: SEARCH_CHARACTERS_FAILURE,
        payload: error.message || 'No characters found'
      });
    }
  };
};