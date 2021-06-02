import React from 'react';
import './styles/default.css';
import './styles/smallscreen.css';
import './styles/widescreen.css';
import './styles/print.css';
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
