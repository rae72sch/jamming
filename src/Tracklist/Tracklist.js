import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';


export default function Tracklist(props) {
    return (
        <div className={ styles.tracklist }>
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                    />
                );
            })}       
        </div>
    );
}
