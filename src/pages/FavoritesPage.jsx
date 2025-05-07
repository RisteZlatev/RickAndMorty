import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearFavorites } from '../redux/actions/favoriteActions';
import CharacterCard from '../components/CharacterCard';


const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const handleClearFavorites = () => {
    const confirm = window.confirm('Are you sure you want to clear all favorites?');
    if (confirm) {
      dispatch(clearFavorites());
    }
  };

  return (
    <div>
      <div>
        <h1>Favorites</h1>
        {favorites.length > 0 && (
          <button onClick={handleClearFavorites}>
            Clear All
          </button>
        )}
      </div>
      
      {favorites.length > 0 ? (
        <div>
          {favorites.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <div>
          <h3>No favorites added yet!</h3>
          <p>Start exploring characters and add them to your favorites.</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;