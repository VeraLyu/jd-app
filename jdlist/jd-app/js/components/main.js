import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import Framework from '../container/framework';
import searchStore from '../redux/store/searchStore';

render((
  <Provider store={searchStore}>
    <Router history={browserHistory}>
      <Route path="/jdlist" component={Framework}/>
    </Router>
  </Provider>

  ),
  document.getElementById('talent')
);
