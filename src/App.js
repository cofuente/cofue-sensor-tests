import React, { Component } from 'react'
import MyCard from './CardContent'
import './App.css'

class App extends Component {
	render() {
		return (
			<div id="super">
				<div className="css-typing" id="intro">
					<h1>Hello, stranger.</h1>
					<h1>Welcome to my page.</h1>
					<h1>In all likelihood I gave you the link myself.</h1>
					<h1>So here, take my card.</h1>
					<h1> -Go on, take it.</h1>
				</div>
				<MyCard />
			<div id="rotate-device" />
			<div id="screen-too-small" />
		</div>)
	}
}

export default App
