import React, { useState, useCallback } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
    const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

    return (
        <div className={ styles.div }>
            <h1>Ja
                <span className={ styles.letters }>mmm</span>
                ing
            </h1>
            <br />
            <form>
                <input placeholder="Enter A Song Title" className={ styles.input } onChange={handleTermChange} />
                <p>
                    <button className={ styles.button } onClick={search}>
                        SEARCH
                    </button>
                </p>
            </form>
        </div>       
    )
}

