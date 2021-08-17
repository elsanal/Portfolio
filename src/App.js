import React, {Suspense} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Blogs from './Pages/Blogs'
import Contacts from './Pages/Contacts'



function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Header/>
        <Router>
            <Switch>
                <Route component={Home} path="/" exact/>
                <Route component={Home} path="/" exact/>
                <Route component={Services} path="/services" />
                <Route component={Blogs} path="/blogs" />
                <Route component={About} path="/about" />
                <Route component={Contacts} path="/contacts" />
            </Switch>
        </Router>
      </div>
    </Suspense>
    
  );
}

export default App;
