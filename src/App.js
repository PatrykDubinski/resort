import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Rooms from './components/Rooms/Rooms';
import SingleRoom from './components/SingleRoom/SingleRoom';
import Error from './components/UI/Error/Error';
import Navbar from './components/Navigation/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/' exact component={Rooms} />
        <Route path='/rooms/:slug' exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
