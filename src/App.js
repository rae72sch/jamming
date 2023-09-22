import React, { useState } from 'react';

import styles from './App.module.css';

// The 3 modules
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

function App() {

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
  const[playlistTracks, setPlaylistTracks] = useState([
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

  return (
      <div>
        <SearchBar />
        <div className={ styles.container }>
          <SearchResults searchResults={searchResults} />
          <Playlist playlistTracks={playlistTracks} />
        </div>
      </div>
  );
}

export default App;

// Photo by <a href="https://unsplash.com/@reallynattu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nattu Adnan</a> on <a href="https://unsplash.com/photos/Ai2TRdvI6gM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
