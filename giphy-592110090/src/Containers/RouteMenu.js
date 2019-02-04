import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListMovie from '../Components/ListMovie';
import ListFavorite from '../Components/favorite/list';
import Profile from '../Components/profile';
// import Main from '../Containers/Main';

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
      <Route path="/favorite" exact component={ListFavorite} />
      <Route path="/profile" exact component={Profile} />
      {/* <Route path="/Logout" exact component={Main} /> */}
      <Redirect from="/*" exact to="/" />
    </Switch>
  );
}

export default RouteMenu;
