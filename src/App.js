import React, { useState, useCallback } from 'react';

import styles from './App.module.css';

// The 3 modules
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

export default function App() {
  const[searchResults, setSearchResults] = useState([
    {
      "name": "The Longships",
      "artist": "Enya",
      "album": "Watermark",
      "id": 1
    },
    {
      "name": "So Far Away",
      "artist": "Dire Straits",
      "album": "Brothers In Arms",
      "id": 2
    },
    {
      "name": "Layla",
      "artist": "Eric Clapton",
      "album": "Unplugged",
      "id": 3
    },
    {
      "name": "Zombie",
      "artist": "The Cranberries",
      "album": "No Need To Argue",
      "id": 4
    }
  ]);
  const[playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  return (
      <div>
        <SearchBar />
        <div className={ styles.container }>
          <SearchResults searchResults={searchResults}  onAdd={addTrack} />
          <Playlist 
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
          />
        </div>
      </div>
  );
}

// Photo by <a href="https://unsplash.com/@reallynattu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nattu Adnan</a> on <a href="https://unsplash.com/photos/Ai2TRdvI6gM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
