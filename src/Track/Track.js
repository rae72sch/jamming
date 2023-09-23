import React, {useCallback} from 'react';
import styles from './Track.module.css';

export default function Track(props) {
    const addTrack = useCallback(
        (event) => {
          props.onAdd(props.track);
        },
        [props.onAdd, props.track]
      );
    
      const removeTrack = useCallback(
        (event) => {
          props.onRemove(props.track);
        },
        [props.onRemove, props.track]
      );

    const renderAction = () => {
        if (props.isRemoval) {
          return (
            <button className={ styles.trackAction } onClick={removeTrack}>
              -
            </button>
          );
        }
        return (
          <button className={ styles.trackAction } onClick={addTrack}>
            +
          </button>
        );
    };

    return (
        <div className={ styles.track }>
            <div className={ styles.trackInformation }>
                <h3> {props.track.name} </h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
}