import React from 'react';
import './App.scss';
import './styles/general.scss';
import { ConnectCarsList } from './components/CarsList';
import { ConnectDetails } from './components/Details';

const App = () => (
  <div className="App">
    <h2>Cars:</h2>
    <ConnectCarsList />
    <hr />
    <h3>Details:</h3>
    <ConnectDetails />
  </div>
);

export default App;
