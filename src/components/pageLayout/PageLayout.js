import React from 'react';
import NavigationBar from 'components/navigationBar/NavigationBar';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/home/Home';
import CounterContainer from 'containers/CounterContainer';

import './PageLayout.scss';

class PageLayout extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>React Redux Starter Kit</h1>
        <NavigationBar />
        <div className='page-layout__viewport'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={CounterContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default PageLayout;
