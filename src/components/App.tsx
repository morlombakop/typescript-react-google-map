import React, { Fragment, FC } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import GoogleMap from './GoogleMap'

const App: FC<{}> = () => {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
  `;

  return (
    <Container>
      {/* <GoogleMap/> */}
      <Slider />
    </Container>
  )
}

export default App
