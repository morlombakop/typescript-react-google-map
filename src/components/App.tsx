import React, { FC } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import GoogleMap from './GoogleMap'
import WebService from '../WebServices'

const App: FC<{}> = () => {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
  `
 
 WebService.request()
    .then(res => console.log('response &&&&&&&&&&&&&&&', res))
    .catch(res => console.log('Error', res))

  return (
    <Container>
      {/* <GoogleMap /> */}
      <Slider />
    </Container>
  )
}

export default App
