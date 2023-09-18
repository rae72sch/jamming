import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
    return (
        <div className={ styles.div }>
            <h1>Ja
                <span className={ styles.letters }>mmm</span>
                ing
            </h1>
            <br />
            <form>
                <input id="search" name="search" type="text" value="Enter A Song Title" className={ styles.input } /> <br /><br />
                <input name="submit" type="submit"  value="Search" className={ styles.button } />
            </form>
        </div>       
    )
}

