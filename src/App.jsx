import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Tensorflow Playground</h1>
          </header>
          <p className="App-intro">
            To get started, and create a new experiment. Create a new route in
            the index.js and follow the file directory pattern
          </p>
          <ul> </ul>
        </div>
      </Fragment>
    )
  }
}

export default App
