import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './views/header';
import MobileFooter from './views/mobile-footer';
import About from './views/about';
import Menu from './views/menu';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/">
          <Redirect to="/about" />
        </Route>
        <Route exact path="/about" render={About} />
        <Route exact path="/menu" render={Menu} />
      </Router>
      {/* <Body /> */}
      <MobileFooter />
    </div>
  );
}

export default App;