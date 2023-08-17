import React, { useState } from 'react';

import ErrorMessage from '../components/resources/ErrorMessage'
import ResultsContainer from '../components/resources/ResultsContainer'
import SearchForm from '../components/resources/SearchForm'



const Resources = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center"
    };

    return (
        <>
            <main>
                <div>
                    <h1 style={myStyle}>RiffSync Music Resources</h1>
                </div>
                <SearchForm setErrorMessage={setErrorMessage} setSearchResults={setSearchResults} />
                {errorMessage ? <ErrorMessage errorMessage={errorMessage} /> : <ResultsContainer searchResults={searchResults} />}
            </main>
        </>
    )
}

export default Resources;