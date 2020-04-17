import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import TopNav from '../TopNav/TopNav'
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import MyPortfolio from '../MyPortfolio/MyPortfolio';
import OtherPortfolio from '../OtherPortfolio/OtherPortfolio';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import AddItem from '../AddItem/AddItem';
import NotFoundPage from '../NotFoundPage/NoteFoundPage';
import './App.css';

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <TopNav />
        </header>
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error.</p>
          )}
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <PublicOnlyRoute path={"/login"} component={LoginPage} />
            <PublicOnlyRoute path={"/register"} component={RegistrationPage} />
            <PrivateRoute path={"/my-portfolio"} component={MyPortfolio} />
            <Route path={"/other-portfolio/:portfolio_id"} component={OtherPortfolio} />
            {/*convert portfolio_id to number on client side */}
            <PrivateRoute path={"/add-item"} component={AddItem} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;