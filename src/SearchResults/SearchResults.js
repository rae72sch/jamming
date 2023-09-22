import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

export default function SearchResults(props) {
    return (
        <div className= { styles.results }>
            <p>
                <h2>Search Results</h2>
                
            </p>
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
    );
}

