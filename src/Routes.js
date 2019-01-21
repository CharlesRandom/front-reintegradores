import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home';
import HomeVideo from './components/home/HomeVideo';
import HomeObjetivos from './components/home/HomeObjetivos';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/login' component={HomeVideo}/>
    <Route path='/signup' component={HomeObjetivos}/>
  </Switch>
)

export default Routes