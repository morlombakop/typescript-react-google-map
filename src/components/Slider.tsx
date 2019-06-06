import React from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const style = { width: 600, margin: 50 };
function percentFormatter(v) {
  return `${v} %`;
}
http://react-component.github.io/slider/examples/slider.html
const SliderWithTooltip = createSliderWithTooltip(Slider);
