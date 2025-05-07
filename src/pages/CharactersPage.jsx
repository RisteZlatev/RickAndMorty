import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/actions/characterActions';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';

const CharactersPage = () => {
  const dispatch = useDispatch();
  const { characters, loading, error, searchActive } = useSelector(state => state.characters);

  useEffect(() => {
    if (!searchActive && characters.length === 0) {
      dispatch(fetchCharacters());
    }
  }, [dispatch, searchActive, characters.length]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => dispatch(fetchCharacters())}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      
      {characters.length > 0 ? (
        <div>
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <div>
          <h3>No characters found</h3>
            <button onClick={() => dispatch(fetchCharacters())}>
              View All Characters
            </button>
        </div>
      )}
    </div>
  );
};

export default CharactersPage;