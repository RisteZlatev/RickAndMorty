import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/actions/favoriteActions';

const CharacterCard = ({ character }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.find(fav => fav.id === character.id);

  const handleFavoriteToggle = (e) => {
    e.preventDefault();
    if (isFavorite) {
      dispatch(removeFavorite(character.id));
    } else {
      dispatch(addFavorite(character));
    }
  };

  return (
    <Link to={`/character/${character.id}`}>
      <div>
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>{character.status}</p>
        <button onClick={handleFavoriteToggle}>
          {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
        </button>
        <button>View Details</button>
      </div>
    </Link>
  );
};

export default CharacterCard;