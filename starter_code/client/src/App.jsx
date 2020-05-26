import React, { Component } from "react";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import { Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route
            exact
            path="/movie/:id"
            render={(props) => <Movie {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
