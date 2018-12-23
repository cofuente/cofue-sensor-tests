import React, { Component } from 'react'
import ReactBusinessCard from './ReactBusinessCard'
import windowSize from 'react-window-size'
import cardStock from './card.jpg'
import CardContent from './CardContent'


class MyRBC extends Component {
	render() {
		const windowHeight = this.props.windowHeight
		const windowWidth = this.props.windowWidth
		const orientation = windowWidth > windowHeight ? 'landscape' : 'portrait'
		const aspectRatio = windowWidth/windowHeight
		let cardHeight, cardWidth
		if (orientation==="portrait") {
			if (windowHeight < 1025){
				cardWidth = cardWidth < 700 ? ((cardWidth * 4)/7) : 400
				cardHeight = windowWidth < 750 ? windowWidth * .9 : 700
				// console.log(1)
				// console.log(cardWidth, cardHeight)
			} else{
				cardWidth = windowWidth < 750 ? windowWidth * .9 : 700
				cardHeight = cardWidth < 700 ? ((cardWidth * 4)/7) : 400
				// console.log(2)
				// console.log(cardWidth, cardHeight)
			}
		}
		if (orientation==="landscape") {
			if (windowHeight >= 700 ) {
				cardWidth = 700
				cardHeight = 400
				// console.log(3)
				// console.log(cardWidth, cardHeight)
			} else if (aspectRatio >= 1.75 ) {
				cardHeight = windowHeight * 0.9
				cardWidth = cardHeight * 1.75
				// console.log(4)
				// console.log(cardWidth, cardHeight)
			} else {
				cardWidth = windowWidth * 0.9
				cardHeight = (cardWidth * 4)/7
				// console.log(5)
				// console.log(cardWidth, cardHeight)
			}
		}
		// console.log(orientation, aspectRatio, windowHeight, windowWidth)
		// console.log(cardWidth, cardHeight)
		return (
			<div id="rbc">
				<ReactBusinessCard width={cardWidth} height={cardHeight}>
					<img ref="image" width={cardWidth} height={cardHeight} src={cardStock} alt="The lovely card stock I picked for this printing. Like it?"/>
					<CardContent width={cardWidth} height={cardHeight} />
				</ReactBusinessCard>
			</div>
		)
	}
}

export default windowSize(MyRBC)