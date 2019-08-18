import { AbsoluteOrientationSensor } from '/sensor.js'

let sensor
const initSensor = () => {
  const options = { frequency: 60, coordinateSystem: null }
  console.log('options passed into AOS constructor:', JSON.stringify(options))
  sensor = new AbsoluteOrientationSensor(options)
  // sensor is NOT an array but an object that has onreading, onactivate and onerror keys
  sensor.onreading = () => {
    // console.log('within onreading:', 'sensor:', JSON.stringify(sensor))
    // quaternion IS an array of numbers corresponding to x, y, z, w
    console.log('within onreading:', 'quaternion:', JSON.stringify(sensor.quaternion))
    // return model.quaternion.fromArray(sensor.quaternion).inverse()
  }
  sensor.onerror = (event) => {
    if (event.error.name == 'NotReadableError') {
      console.log('Sensor is not available.')
    }
  }
  sensor.start()
}
initSensor()
