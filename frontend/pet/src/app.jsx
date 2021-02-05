import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './utils/history';
import { PrivateRoute } from './hoc/PrivateRoute';

// Page Load
import Account from './views/Accounts/Account';
import Create from './views/Board/Create';
import MainPage from './views/MainPage/MainPage';
import Profile from './views/Profile/Profile';
import Map from './views/Map/Map';
import PageNotFound from './views/PageNotFound/PageNotFound';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [isLogin, setIslogin] = useState(false);

  const users = () => {
    const user = localStorage.getItem('user');
    console.log(user);
    if (user === null) {
      setIslogin(false);
    } else {
      setIslogin(true);
    }
  };

  useEffect(() => {
    users();
  }, [localStorage.getItem('user')]);

  return (
    <>
      <Router history={history}>
        {isLogin && <NavBar isLogin={isLogin} />}
        <Switch>
          <Route path="/login" component={Account} />
          <PrivateRoute exact path="/" component={MainPage} />
          <PrivateRoute path="/create" component={Create} />
          <PrivateRoute path="/map" component={Map} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
