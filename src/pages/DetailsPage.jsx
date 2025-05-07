import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacterDetails } from '../redux/actions/characterActions';
import { addFavorite, removeFavorite } from '../redux/actions/favoriteActions';
import Loading from '../components/Loading';
import './DetailsPage.css';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { characterDetails, loading, error } = useSelector(state => state.characters);
  const favorites = useSelector(state => state.favorites);
  
  const isFavorite = characterDetails ? 
    favorites.some(fav => fav.id === characterDetails.id) : 
    false;

  useEffect(() => {
    dispatch(fetchCharacterDetails(id));
  }, [dispatch, id]);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(characterDetails.id));
    } else {
      dispatch(addFavorite(characterDetails));
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const getStatusClass = (status) => {
    if (!status) return 'status-unknown';
    
    switch(status.toLowerCase()) {
      case 'alive': return 'status-alive';
      case 'dead': return 'status-dead';
      default: return 'status-unknown';
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button onClick={goBack}>
          Go Back
        </button>
      </div>
    );
  }

  if (!characterDetails) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <button onClick={goBack}>
        Back
      </button>
      
      <div>
        <div>
          <img src={characterDetails.image} alt={characterDetails.name} />
        </div>
        
        <div>
          <div>
            <h1>{characterDetails.name}</h1>
            <button 
              onClick={handleFavoriteToggle}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
            </button>
          </div>
          
          <div>
            <span>{getStatusClass(characterDetails.status)}</span>
            {characterDetails.status}
          </div>
          
          <div>
            <div>
              <h3>Species</h3>
              <p>{characterDetails.species}</p>
            </div>
            
            <div>
              <h3>Gender</h3>
              <p>{characterDetails.gender}</p>
            </div>
            
            <div>
              <h3>Origin</h3>
              <p>{characterDetails.origin?.name}</p>
            </div>
            
            <div>
              <h3>Location</h3>
              <p>{characterDetails.location?.name}</p>
            </div>
            
            <div>
              <h3>Type</h3>
              <p>{characterDetails.type || 'Unknown'}</p>
            </div>
            
            <div>
              <h3>First seen in</h3>
              <p>Episode {characterDetails.episode?.[0]?.split('/').pop() || 'Unknown'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;