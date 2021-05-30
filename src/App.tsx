import React from 'react';
import './App.css';
import {CV} from "./components/CV";

function App() {
    document.title = 'CV – Dominik Wojnar – konsolamini.com';
    return (
        <div className="App">
            <CV/>
        </div>
    );
}

export default App;
