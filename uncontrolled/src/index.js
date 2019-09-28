import React, { Component } from 'react';
import { render } from 'react-dom';

import JoinForm from './JoinForm'

import './style.css'

class App extends Component {
  render() {
    return (
      <div>
        <JoinForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));