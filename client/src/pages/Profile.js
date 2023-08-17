import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="profile">
      <h1 className="text-3xl font-bold underline">RiffSync Profile</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Instrument: {user.instrument}</p>
          <p>Subcategory: {user.subcategory}</p>
          <p>Genre: {user.genre}</p>
          <p>Skill Level: {user.skillLevel}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>No user information found.</p>
      )}
    </div>
  );
}
