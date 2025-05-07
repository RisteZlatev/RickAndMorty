import{
    FETCH_CHARACTERS_REQUEST,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE,
    FETCH_CHARACTER_DETAILS_REQUEST,
    FETCH_CHARACTER_DETAILS_SUCCESS,
    FETCH_CHARACTER_DETAILS_FAILURE,
    SEARCH_CHARACTERS_REQUEST,
    SEARCH_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_FAILURE,
} from '../actions/characterActions';

const initialState = {
    characters: [],
    characterDetails: null,
    loading: false,
    error: null,
    search: '',
}

const characterReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACTERS_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
            }
        case FETCH_CHARACTERS_SUCCESS:
            return{
                ...state,
                loading: false,
                characters: action.payload,
                error: null,
            };
        case FETCH_CHARACTERS_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
                characters: [],
            };
        case FETCH_CHARACTER_DETAILS_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_CHARACTER_DETAILS_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                characterDetails: action.payload,
            }
        case FETCH_CHARACTER_DETAILS_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
                characterDetails: null,
            }
        case SEARCH_CHARACTERS_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
                search: action.payload,
            };
        case SEARCH_CHARACTERS_SUCCESS:
            return{
                ...state,
                loading: false,
                characters: action.payload,
                error: null,
            };
        case SEARCH_CHARACTERS_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
                characters: [],
            };
        default:
            return state;
    }
};

export default characterReducer;