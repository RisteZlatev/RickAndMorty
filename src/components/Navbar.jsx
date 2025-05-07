import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { searchCharacters } from '../redux/actions/characterActions';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(searchCharacters(searchTerm));
      if (location.pathname !== '/') {
        navigate('/');
      }
    }
  };

  return (
    <nav>
      <div>
        <Link to="/">Rick and Morty Explorer</Link>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div>
          <Link to="/">
            Characters
          </Link>
          {' | '}
          <Link to="/favorites">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;