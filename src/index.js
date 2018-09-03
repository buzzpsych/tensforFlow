import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import FirstExample from './FirstExample'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/firstexample" component={FirstExample} />
		</div>
	</Router>,
	document.getElementById('root')
)
registerServiceWorker()
