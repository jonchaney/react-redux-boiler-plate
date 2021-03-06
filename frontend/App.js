import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./components/presentationals/header.js";

const App = () => (
    <Route exact path="/" component={Header} />
);

export default App;