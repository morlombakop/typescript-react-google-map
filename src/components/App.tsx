import * as React from 'react'
import styled from 'styled-components'
import Slider from './Slider1'
import GoogleMap from './GoogleMap'
import fetchDrivers from '../WebServices'
import { IBooking, IDriver } from '../Types'
import { driversCount } from '../constants';

type AppState ={
  sliderValue: number
  drivers: IDriver[]
}

const App: React.FC = () => {
  const [state, setState] = React.useState<AppState>({ sliderValue: driversCount, drivers: [] })
  // const [sliderValue, setSliderValue] = React.useState<number>(driversCount)
  const loadDriver = (count: number = driversCount) => {
    // if(sliderValue !== count ) {
    //   setSliderValue(count)}
    console.log('Load driver fired  $$$$$$$$$$$$$$$', count)
    fetchDrivers(count)
    .then((res: IBooking) => {
      console.log('response &&&&&&&&&&&&&&&', res)
      setState({
        sliderValue: count,
        drivers: res.drivers
      })
    })
    .catch(res => console.log('Error', res))
  }

  if(!state.drivers.length){
    loadDriver()
  }
 
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
  `

  if (state.drivers.length) {
    return (
      <Container>
        {/* <GoogleMap {...state} /> */}
        <Slider onChange={loadDriver} sliderValue={state.sliderValue}/>
      </Container>
    )
  }

  return <h1>Loading .....</h1>
}

export default App
