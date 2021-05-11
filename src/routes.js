import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/Index/Index';
// import { Contact } from './pages/Contact/Contact'

export function Routes(){
    // let history = createBrowserHistory();


    return( 
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          
          {/* <Route path="/" exact component={Contact} /> */}
        </Switch>
      </BrowserRouter>  
    );

}
