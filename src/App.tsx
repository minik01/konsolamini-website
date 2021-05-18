import React, {useState} from 'react';
import './App.css';
import {Projects} from "./components/Projects";
import {CV} from "./components/CV";

function App() {
    const [visible, setVisible] = useState(false);
    return (
        <div className="App">
            {visible ? (
                <>
                    <header>Witam</header>
                    <Projects/>
                    <CV/>
                </>
            ) : (
                <>
                    <h1>Strona w budowie</h1>
                    <button onClick={(event) => setVisible(!visible)}>zobacz mimo to</button>
                </>
            )}

        </div>
    );
}

export default App;
