import * as React from 'react'
import styled from 'styled-components'
import RangeSlider from './RangeSlider'
import GoogleMap from './GoogleMap'
import Loader from './Loader'
import Error from './Error'
import fetchDrivers from '../services/HttpServices'
import { IBooking, IDriver } from '../Types'
import { driversCount } from '../constants'

type AppState = {
  sliderValue: number
  drivers: IDriver[]
}

const App: React.FC = () => {
  const [state, setState] = React.useState<AppState>({ sliderValue: driversCount, drivers: [] })
  const [hasError, setError] = React.useState<Boolean>(false)

  const loadDriver = (count: number = driversCount) => {
    fetchDrivers(count)
      .then((res: IBooking) => {
        setState({
          sliderValue: count,
          drivers: res.drivers,
        })
      })
      .catch(() => setError(true))
  }

  if (!state.drivers.length) {
    loadDriver()
  }

  const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
  `

  if (hasError) {
    return <Error />
  }

  if (state.drivers.length) {
    return (
      <Container data-testid="app-container">
        <GoogleMap {...state} />
        <RangeSlider onSlideComplete={loadDriver} sliderValue={state.sliderValue} />
      </Container>
    )
  }

  return <Loader />
}

export default App
