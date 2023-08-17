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

            <div className='resources-container'>
                <div className='home'>
                    <h1 className="text-3xl font-bold underline">
                        RiffSync Music Resources
                    </h1>

                    
                        <SearchForm setErrorMessage={setErrorMessage} setSearchResults={setSearchResults} />
                        <div className='resources-content'>
                        {errorMessage ? <ErrorMessage errorMessage={errorMessage} /> : <ResultsContainer searchResults={searchResults} />}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Resources;