import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { Home } from './home/Home';
import { FitRecepty } from './fit_recepty/FitRecepty';
import { Header } from './header/Header';

const App = () => (
  <>
  <div className="mainPage">
    <Header />
    <Router>
      <header className="mainMenu">
        <NavLink className="imgDinner" to="/">
          &#127860;
        </NavLink>
        <NavLink exact to="/FitRecepty">
          Fit Recepty
        </NavLink>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/FitRecepty">
            <FitRecepty />
          </Route>
        </Switch>
      </main>
    </Router>
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
