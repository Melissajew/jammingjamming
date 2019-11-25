import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchResults: ['name', 'artist', 'album', 'id']
        }
    }

    render() {
        return (
            <div className="App">
                <div>
                    <h1>Ja<span className="highlight">mmm</span>ing</h1>
                    <div class="App">
                        
                        <div className="App-playlist">
                            <SearchResults searchResults = {this.state.searchResults}/>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default App;