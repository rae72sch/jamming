import React, { useCallback } from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

export default function Playlist(props) {
    const handleNameChange = useCallback(
        (event) => {
          props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );
    
    return (
        <div className={ styles.playlist }>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <br />
            <Tracklist tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove} />
            <p>
                <button className={ styles.button } onClick={props.onSave}>
                    Save To Spotify
                </button>
            </p>
        </div>
    );
}