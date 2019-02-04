import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListMovie from '../Components/ListMovie';
import ListFavorite from '../Components/favorite/list';
import Profile from '../Components/profile';
import Main from './Main';


function RouteMenu(props) {
  return (
    <Switch>
      <Route
        path="/giphy"
        exact
        render={() => {
          return <ListMovie items={props.items} />;
        }}
      />
      <Route exact path="/home" component={Main} />
      <Route exact path="/favorite"  component={ListFavorite} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
}

export default RouteMenu;
