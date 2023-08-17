import React, { useState } from 'react';
import '../components/search.css';
import { instruments } from '../components/instrument';
import fakeAccounts from '../components/fakeAccounts';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('Beginner');
  const [matchedAccounts, setMatchedAccounts] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);


  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSearchAttempted(false);

    if (value === '') {
      setMatchedAccounts([]);
      setSuggestions([]);
      setSelectedInstrument(null);
      setSelectedSubcategory(null);
      setShowSuggestions(false);
    } else {
      const matches = instruments
        .filter((inst) => inst.name.toLowerCase().startsWith(value.toLowerCase()))
        .map((inst) => inst.name);
      setSuggestions(matches);
      setShowSuggestions(true);
    }
  };


  const handleSearchSubmit = () => {
    setSearchAttempted(true);
    if (searchTerm) {
      const instrument = instruments.find((instrument) => instrument.name.toLowerCase() === searchTerm.toLowerCase());
      setSelectedInstrument(instrument);
      setSelectedSubcategory(null);
      setSelectedGenre(null);
    }
    handleSubmit();

  };



  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const selectSubcategory = (subcategory, index) => {
    setSelectedSubcategory(subcategory);
    setSelectedGenre(null);
  };

  const selectGenre = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSkillLevelChange = (event) => {
    setSelectedSkillLevel(event.target.value);
  };

  const handleSubmit = () => {
    if (!selectedInstrument) {
      setSearchAttempted(true);
      setShowSuggestions(false);
      return;
    }
  
    const matches = fakeAccounts.filter((account) => {
      return account.instrument === selectedInstrument.name &&
        (!selectedSubcategory || account.subcategory === selectedSubcategory) &&
        (!selectedGenre || account.genre === selectedGenre) &&
        (!selectedSkillLevel || account.skillLevel === selectedSkillLevel);
    });
  
    setMatchedAccounts(matches);
    setSearchAttempted(true);
  };


  const genresForSelectedInstrument =
    selectedInstrument && selectedSubcategory && selectedInstrument.genres[selectedSubcategory]
      ? selectedInstrument.genres[selectedSubcategory]
      : []

  return (
    <div className="home">
      <h1 className="text-3xl font-bold underline">RiffSync search</h1>
      <input
        type="text"
        placeholder="Search instruments..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="border rounded p-2 w-full"
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => {
                setSearchTerm(suggestion);
                setSelectedInstrument(instruments.find((inst) => inst.name === suggestion));
                setSuggestions([]);
              }}
              className="suggestion"
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
      <button onClick={handleSearchSubmit} className="search-button">
        Search
      </button>

      <select value={selectedSkillLevel} onChange={handleSkillLevelChange} className="border rounded p-2 select-skill-level mt-4">
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Expert">Expert</option>
        <option value="Professional">Professional</option>
        <option value="God Tier">God Tier</option>
      </select>
      {selectedInstrument && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold underline">Subcategories for {selectedInstrument.name}:</h2>
          <div>
            {selectedInstrument.subcategories.map((subcategory, index) => (
              <div
                key={index}
                className={`search-result ${selectedSubcategory === subcategory ? 'selected' : ''}`}
                onClick={() => selectSubcategory(subcategory, index)}
              >
                {subcategory}
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedSubcategory && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold underline">Genres for {selectedSubcategory}:</h2>
          <div>
            {genresForSelectedInstrument.map((genre, index) => (
              <div
                key={index}
                className={`search-result ${selectedGenre === genre ? 'selected' : ''}`}
                onClick={() => selectGenre(genre)}
              >
                {genre}
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedInstrument && (
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      )}
      { matchedAccounts.length > 0 ? (
  <div className="matched-accounts-container">
    {matchedAccounts.map((account, index) => (
      <div key={index} className="matched-account">
              <p>Name: {account.name}</p>
              <p>Instrument: {account.instrument}</p>
              <p>Subcategory: {account.subcategory}</p>
              <p>Skill Level: {account.skillLevel}</p>
              </div>
          ))}
        </div>
      ) : searchAttempted ? (
        <p className="no-user-message">User does not exist, yet</p>
      ) : null}
    </div>
  );
};

