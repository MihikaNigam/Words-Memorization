import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import WordCreate from "./screens/WordCreate";
import WordUpdate from "./screens/WordUpdate";
import WordDelete from "./screens/WordDelete";
import WordList from "./screens/WordList";
import WordShow from "./screens/WordShow";
import WordTest from "./screens/WordTest";
import TestResult from "./screens/TestResult";
import HomeScreen from "./screens/HomeScreen";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/screens/test" exact component={WordTest} />
            <Route path="/screens/results" exact component={TestResult} />
            <Route path="/screens/allWords" exact component={WordList} />
            <Route path="/screens/new" exact component={WordCreate} />
            <Route path="/screens/edit/:id" exact component={WordUpdate} />
            <Route path="/screens/delete/:id" exact component={WordDelete} />
            <Route path="/screens/:id" exact component={WordShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
