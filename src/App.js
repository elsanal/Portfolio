import React, {Suspense} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Components/Header'
import About from './Pages/About'
import Services from './Pages/Services'
import Blogs from './Pages/Blogs'
import Contacts from './Pages/Contacts'
import Projects from './Pages/Projects'



function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Router>
        <Header/>
            <Switch>
                <Route component={About} path="/about" exact/>
                <Route component={About} path="/" exact/>
                <Route component={Services} path="/services" />
                <Route component={Projects} path="/projects" />
                <Route component={Blogs} path="/blogs" />
                <Route component={Contacts} path="/contacts" />
            </Switch>
        </Router>
      </div>
    </Suspense>
    
  );
}

export default App;
