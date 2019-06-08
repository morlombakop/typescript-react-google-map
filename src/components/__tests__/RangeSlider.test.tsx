import 'jest-dom/extend-expect'
import 'jest-styled-components'
import * as React from 'react'
import { cleanup, render } from '@testing-library/react'
import RangeSlider from '../RangeSlider'
import { IRangeSliderProps } from '../../Types'

afterAll(cleanup)

describe('RangeSlider component tests', () => {
  const props: IRangeSliderProps = {
    sliderValue: 10,
    onSlideComplete: (sliderValue: number) => {},
  }

  const { getByTestId } = render(<RangeSlider {...props} />)
  const rangeContainer = getByTestId('range-slider-container')

  test('RangeSlider component renders properly', () => {
    expect(rangeContainer).toMatchSnapshot()
    expect(rangeContainer).toBeInstanceOf(HTMLDivElement)
    expect(rangeContainer.childElementCount).toBe(1)
    expect(rangeContainer).toHaveStyle(`
      position: absolute;
      bottom: 20px;
      left: 0;
      width: calc(100% - 30px);
      padding: 0 15px;
    `)
    expect(rangeContainer.firstChild).toBeInstanceOf(HTMLElement)
  })
})
