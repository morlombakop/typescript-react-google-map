import * as React from 'react'
import styled from 'styled-components'

const Loader: React.FC = () => {
  const Spinner = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    width: 50px;
    height: 50px;
    margin: -25px 0 0 -25px;
    border: 10px solid #dddddd;
    border-radius: 50%;
    border-top: 10px solid #4caf50;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `

  return <Spinner data-testid="loader-container" />
}

export default Loader
