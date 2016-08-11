import React from 'react';
import {Component} from 'react';
import Header from './header';
import Footer from './footer';
import JDs from '../container/jds';

export class Framework extends Component {
  componentWillMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div>
        <Header/>
          <JDs/>
        <Footer/>
      </div>);
  }
}

Framework.propTypes = {
  children: React.PropTypes.object,
  fetch: React.PropTypes.function
};
