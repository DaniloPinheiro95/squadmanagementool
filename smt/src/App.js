import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from "./routes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    app: {
        backgroundColor: "#F7F3F7",
        height: "auto"
    }
});

function App() {

    let classes = useStyles();

    return (
        <Router>
            <div className={classes.app}>
                <Routes />
            </div>
        </Router>
    );
}

export default App;