import React, { Component } from 'react';
import logo from './logo.svg';
import FileUpload from './FileUpload'
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>上载</h1>
            <img height="142" src="https://cdn.dribbble.com/users/285803/screenshots/1066705/dribbble.gif"></img>
            <p>
            Upload your pictures!
          </p>
            <FileUpload/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
            <h5><p>Made with &hearts; in NYC</p></h5>
        </header>
      </div>
    );
  }
}

export default App;
