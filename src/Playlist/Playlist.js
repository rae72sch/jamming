import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

export default function Playlist() {
    return (
        <div className={ styles.playlist }>
            <h2>Playlist</h2>
            <hr />
            
            <form>
                <input name="submit" type="submit"  value="Save to Spotify" className={ styles.button } />
            </form>
        </div>
    )
}