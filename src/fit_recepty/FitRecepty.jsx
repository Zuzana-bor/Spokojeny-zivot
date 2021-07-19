import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { Recipe } from '../recipe/Recipe';
import './fitReceptyConteiner.css';

export const FitRecepty = () => {
  return (
    <>
      <Router>
        <div className="FitReceptyConteiner">
          <div className="FitReceptyMenu">
            <ul>
              <li>
                <NavLink exact to="/FitRecepty/snidane">
                  Snídaně
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/FitRecepty/svaciny">
                  Svačiny
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/FitRecepty/polevky">
                  Polévky
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/FitRecepty/hlavnichod">
                  Hlavní chod
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/FitRecepty/vecere">
                  Večeře
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="recept">
            <Switch>
              <Route exact path="/FitRecepty/:id" children={<Recipe />} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};
