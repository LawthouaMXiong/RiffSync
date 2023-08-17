import React from 'react';
import ResultItem from './ResultItem';

const ResultsContainer = ({ searchResults }) => {
    return <>{searchResults.length !== 0 && <div className="search-results" >{searchResults.map(resultItem => <ResultItem key={resultItem.pageid} resultItem={resultItem} />)}</div>}</>;
}

export default ResultsContainer;