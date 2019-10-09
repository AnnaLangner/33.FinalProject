import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from "./components/layouts/MainLayout/MainLayout";

//import routes
import Home from './components/pages/Home/HomePage';
import FAQ from './components/pages/FAQ/FaqPage';
import Contact from './components/pages/Contact/ContactPage';
import Statute from './components/pages/Statute/StatutePage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Product from './components/pages/Product/ProductPage';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
          <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/products'} exact component={Home}/>
              <Route path={'/FAQ'} exact component={FAQ}/>
              <Route path={'/statute'} exact component={Statute}/>
              <Route path={'/contact'} exact component={Contact}/>
              <Route path={'/product'} exact component={Product}/>
              <Route component={NotFound}/>
          </Switch>
      </MainLayout>
    );
  }
}

export default App;
