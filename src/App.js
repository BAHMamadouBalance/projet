import React from 'react';
import Accueil from './components/Accueil';
import Series from './components/Series';
import Movies from './components/Movies';
import Error from './components/Error';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div class="centre">
        <Router>
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route exact path="/Series" component={Series} />
            <Route exact path="/Movies" component={Movies} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
