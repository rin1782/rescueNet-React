import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route path='/signup' component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
