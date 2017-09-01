import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';


import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Classic from './components/Classic';
import Alternative from './components/Alternative';
import Trap from './components/Trap';
import Contact from './components/Contact';

import BaseLayout from './components/BaseLayout';



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About} />
        <Route path="/shop/classic" component={Classic} />
        <Route path="/shop/trap" component={Trap} />
        <Route path="/shop/alternative" component={Alternative} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />

      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
