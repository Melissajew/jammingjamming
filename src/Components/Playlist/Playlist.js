import React from 'react';
import './Playlist.css';
import TrackList from './TrackList/TrackList';

class Playlist extends React.Component{
    render(){
        return(
            <div className="Playlist">
                <input defaultvalue={'New Playlist'}/>
                <h2>Add a TrackList component</h2>
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;