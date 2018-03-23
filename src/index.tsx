import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import { store } from './stores/index';
import App from './App';
import ContactsList from './components/ContactsList';
import PlayingScreen from './components/PlayingScreen';
import MatchesList from './components/MatchesList';
import AddMatches from './components/AddMatches';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import './index.css';
import Board from './components/Board';

document.getElementById('loadingSpinner')!.style.display = 'none';

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter
        basename={
          location.hostname === 'yoav-zibin.github.io' ? 'NewGamePortal' : '/'
        }
      >
        <div>
          <Route path="/" component={App} exact={true} />
          <Route path="/match/:matchId" component={PlayingScreen} />
          <Route path="/board" component={Board} />
          <Route path="/myMatches" component={MatchesList} />
          <Route path="/addMatches" component={AddMatches} />
          <Route path="/addComponent" component={ContactsList} />
          <Route path="/login" component={Login} />
          <Route path="/match/:matchId" component={PlayingScreen} />
        </div>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
