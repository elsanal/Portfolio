import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/Details";
import Contacts from "./Pages/Contacts";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";

function App() {
  var dotenv = require("dotenv");
  var dotenvExpand = require("dotenv-expand");
  var myEnv = dotenv.config();
  dotenvExpand(myEnv);

  return (
    <Suspense fallback="loading">
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route component={About} path="/about" exact />
            <Route component={Blogs} path="/" exact />
            <Route component={Resume} path="/resume" />
            <Route component={Services} path="/services" />
            <Route component={Projects} path="/projects" />
            <Route component={Blogs} path="/blogs" />
            <Route component={Contacts} path="/contacts" />
            <Route component={BlogDetails} path="/blog+details/:id" />
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
