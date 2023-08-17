import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { FormGroup } from 'react-bootstrap';

const SearchForm = ({ setErrorMessage, setSearchResults }) => {
  const [searchInput, setSearchInput] = useState('');

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchResults([]);
    const searchValue = searchInput.trim();

    if (!searchValue) {
      setErrorMessage('A text input must be submitted to get search results.');
    }
    else {
      fetchSearchResults(searchValue);
    }
  }

  function fetchSearchResults(searchValue) {
    axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchValue}&origin=*&format=json`)
      .then(response => {
        renderSearchResults(response.data.query.search, searchValue);
      }).catch(error => {
        setErrorMessage('Unable to load Wikipedia search results at this time.');
      });
  }

  function renderSearchResults(results, searchValue) {

    if (results.length !== 0) {
      setSearchResults(results);
      setErrorMessage('');
    }
    else {
      setErrorMessage(`Unable to find results for "${searchValue}". Consider revising your search.`);
    }
  }

  const searchBarStyle = {
    textAlign: "center",
    display: "flex",
    padding: 20
};

return (
  /*<form role="search" className="search-form" onSubmit={(event) => handleSubmit(event)} noValidate>
    <div className="form-group">
      <input type="text" className="search-input" aria-label="Search Wikipedia..." placeholder="Search Wikipedia..." onChange={(event) => handleChange(event)} value={searchInput} required autoFocus />
    </div>
  </form>*/

  <Form onSubmit={(event) => handleSubmit(event)} noValidate>
    <FormGroup className='mb-3' controlId='searchForm'>
      <Form.Control type='text' className="search-input" placeholder='Search Wikipedia!' onChange={(event) => handleChange(event)} value={searchInput} required autoFocus style={searchBarStyle} />
    </FormGroup>
  </Form>
);
}

export default SearchForm;