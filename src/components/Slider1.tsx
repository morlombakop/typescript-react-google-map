import * as  React from 'react'
import styled from 'styled-components'
import { throttle } from 'lodash'
import { ISliderProps } from '../Types'
// import { driversCount } from '../constants'

const Slider: React.FC<ISliderProps> = ({ onChange, sliderValue }) => {
  const rangeRef = React.useRef<HTMLInputElement>(null!);
  // const [value, setValue] = React.useState<string>(driversCount.toString())

  const handleSlide = throttle(() => {
    if(rangeRef.current){
      const value = rangeRef.current.valueAsNumber
      console.log('Slider value .....', value)
      // setValue(value)
      onChange(value)
    }
  }, 1000)

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
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #4caf50;
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #4caf50;
      cursor: pointer;
    }
  `
  return (
    <Range
      title="Slide to filter"
      type="range"
      ref={rangeRef}
      min="1"
      max="50"
      step="1"
      defaultValue={sliderValue.toString()}
      onChange={handleSlide}
      data-testid="input-driver-count"
    />
  )
}

export default Slider
