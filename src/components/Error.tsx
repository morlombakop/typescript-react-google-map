import * as React from 'react'
import styled from 'styled-components'

const Error: React.FC = () => {
  const Container = styled.div`
    margin: 0;
    position: absolute;
    width: 100%;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    h1 {
      color: red;
      text-align: center;
    }
    h5 {
      text-align: center;
      font-weight: normal;
    }
  `

  return (
    <Container data-testid="error-container">
      {/* In a normal project these texts will be saved in a separate json file for internationalization */}
      <h1>Error</h1>
      <h5>Please ensure you have an internet connection and reload the page.</h5>
    </Container>
  )
}

export default Error
