import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import TopNav from '../TopNav/TopNav'
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
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/register"} component={RegistrationPage} />
            <Route path={"/my-portfolio"} component={MyPortfolio} />
            <Route path={"/other-portfolio"} component={OtherPortfolio} />
          {/*<Route component={NotFoundPage} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;