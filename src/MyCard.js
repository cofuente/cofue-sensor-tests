import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactBusinessCard from './ReactBusinessCard'
import cardStock from './card.png'
import CardContent from './CardContent'

const cardInfo = {
  firstName: 'Chiara',
  lastName: 'Marcial Martínez',
  title: 'full stack software engineer',
  email: 'contact@cofuente.io',
  resumeFilename: 'chiaramarcialmartínez.pdf',
  linkedInUrl: 'https://www.linkedin.com/in/cofuente/',
  githubUrl: 'https://github.com/cofuente',
}

export default class MyCard extends PureComponent {
  render() {
    const { width, height } = this.props
    return (
      <div id='rbc'>
        <ReactBusinessCard width={width} height={height}>
          <img width={width} height={height} src={cardStock} alt='The lovely card stock I picked for this printing. Like it?' />
          <CardContent width={width} height={height} cardInfo={cardInfo} />
        </ReactBusinessCard>
      </div>
    )
  }
}

MyCard.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}
