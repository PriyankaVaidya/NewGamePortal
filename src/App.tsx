import * as React from 'react';
import './App.css';
import AppHeader from './AppHeader';
import GamesList from './components/GamesList';
import { Route } from 'react-router';
import PrivateRoute from './components/PrivateRoute';
import PlayingScreen from './components/PlayingScreen';
import MatchesList from './components/MatchesList';
import AddMatch from './components/AddMatch';
import ContactsList from './components/ContactsList';
import Login from './components/Login';

// TODO: Use private route component to display games list only when you
// logged in
class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Route
          exact={true}
          path="/matches/:matchId"
          component={PlayingScreen}
        />
        <Route exact={true} path="/myMatches" component={MatchesList} />
        <Route exact={true} path="/addMatch" component={AddMatch} />
        <Route
          exact={true}
          path="/contactsList/:matchId"
          component={ContactsList}
        />
        <Route exact={true} path="/login" component={Login} />
        <PrivateRoute component={GamesList} exact={true} path="/" />
      </div>
    );
  }
}

export default App;
