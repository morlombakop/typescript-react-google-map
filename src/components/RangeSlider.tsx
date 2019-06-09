import * as React from 'react'
import Slider, { createSliderWithTooltip } from 'rc-slider'
import styled from 'styled-components'
import { IRangeSliderProps } from '../Types'

const RangeSlider: React.FC<IRangeSliderProps> = ({ onSlideComplete, sliderValue }) => {
  const SliderWithTooltip = createSliderWithTooltip(Slider)
  const Container = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    width: calc(100% - 30px);
    padding: 0 15px;
  `
  return (
    <Container data-testid="range-slider-container">
      <SliderWithTooltip
        defaultValue={sliderValue}
        step={1}
        min={1}
        max={50}
        onAfterChange={onSlideComplete}
        railStyle={{ backgroundColor: '#d3d3d3', height: 7 }}
        trackStyle={{ backgroundColor: '#4caf50', height: 7 }}
        handleStyle={{
          borderColor: '#4caf50',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: '#4caf50',
        }}
        data-testid="input-range-slider"
      />
    </Container>
  )
}

export default RangeSlider
