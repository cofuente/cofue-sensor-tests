import React from 'react'
import useForceUpdate from 'use-force-update'
import EventListener from 'react-event-listener'
import MyCard from './MyCard'
import { TextConsole } from './TextConsole'
import './styles/App.css'
import { AbsoluteOrientationSensor } from '../public/init'


const App = () => {
  const forceUpdate = useForceUpdate()
  const handleResize = () => {
    forceUpdate()
  }
  const handleOrientationChange = () => {
    forceUpdate()
  }
  let sensor
  let cardWidth
  let cardHeight
  let quaternionArr
  const initSensor = () => {
    const options = { frequency: 60, coordinateSystem: null }
    // console.log('options passed into AOS constructor:', JSON.stringify(options))
    sensor = new AbsoluteOrientationSensor(options)
    // sensor is NOT an array but an object that has onreading, onactivate and onerror keys
    sensor.onreading = () => {
      // console.log('within onreading:', 'sensor:', JSON.stringify(sensor))
      // quaternion IS an array of numbers corresponding to x, y, z, w
      const { quaternion } = sensor
      quaternionArr = quaternion
      // console.log('within onreading:', 'quaternion:', JSON.stringify(sensor.quaternion))
      // return model.quaternion.fromArray(sensor.quaternion).inverse()
    }
    sensor.onerror = (event) => {
      if (event.error.name == 'NotReadableError') {
        console.log('Sensor is not available.')
      }
    }
    sensor.start()
  }
  const { innerWidth, innerHeight } = window
  const orientation = innerWidth > innerHeight ? 'landscape' : 'portrait'
  const aspectRatio = innerWidth / innerHeight
  if (orientation === 'portrait') {
    cardWidth = innerWidth < 750 ? innerWidth * 0.9 : 700
    cardHeight = cardWidth < 700 ? ((cardWidth * 4) / 7) : 400
  }
  if (orientation === 'landscape') {
    if (innerHeight >= 700) {
      cardWidth = 700
      cardHeight = 400
    } else if (aspectRatio >= 1.75) {
      cardHeight = innerHeight * 0.9
      cardWidth = cardHeight * 1.75
    } else {
      cardWidth = innerWidth * 0.9
      cardHeight = (cardWidth * 4) / 7
    }
  }
  initSensor()
  return (
    <div id='super'>
      <EventListener
        target='window'
        onResize={handleResize}
        onOrientationChange={handleOrientationChange}
      />
      <TextConsole />
      <MyCard width={cardWidth} height={cardHeight} quaternionArr={quaternionArr} />
    </div>
  )
}

export default App
