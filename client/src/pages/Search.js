import React, { useState } from 'react';
import '../components/search.css';
import { instruments } from '../components/instrument';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('Beginner'); // Added this line


  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === '') {
      setSelectedInstrument(null);
      setSelectedSubcategory(null);
    }
  };


  const handleSearchSubmit = () => {
    if (searchTerm) {
      const instrument = instruments.find((instrument) =>
        instrument.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSelectedInstrument(instrument);
      setSelectedSubcategory(null);
      setSelectedGenre(null);
    }
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
    const selectedData = {
      searchTerm,
      selectedInstrument,
      selectedSubcategory,
      selectedGenre,
      selectedSkillLevel,
    };
    console.log(selectedData);
  };


  const genresForSelectedInstrument =
    selectedInstrument && selectedSubcategory && selectedInstrument.genres[selectedSubcategory]
      ? selectedInstrument.genres[selectedSubcategory]
      : [];


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
    </div>
  );
}