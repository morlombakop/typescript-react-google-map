import React, { FC, useState, ChangeEvent, FocusEvent } from 'react'
import styled from 'styled-components'

const Slider: FC<{}> = () => {
  const [range, setRange] = useState('20')

  const handleSlide = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    // setRange(event.target.value)
    console.log('Slider ....', event.target.value)
  }

  const handleFocusLost = (event: FocusEvent<HTMLInputElement>) => {
    event.preventDefault()
    setRange(event.target.value)
    console.log('Slider ....', event.target.value)
  }

  const Range = styled.input`
    position: absolute;
    bottom: 20px;
    left: 0;
    -webkit-appearance: none;
    width: 100%;
    height: 7px;
    border-radius: 5px;   
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%; 
      background: #4CAF50;
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #4CAF50;
      cursor: pointer;
    }
  `;

  return (
    <Range
      title="Slide to filter"
      type="range"
      min="1"
      max="100"
      step="1"
      // value={range}
      defaultValue={range}
      onChange={handleSlide}
      onBlur={handleFocusLost}
    />
  )
}

export default Slider
