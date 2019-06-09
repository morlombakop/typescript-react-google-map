import 'jest-dom/extend-expect'
import 'jest-styled-components'
import * as React from 'react'
import { cleanup, render } from '@testing-library/react'
import Loader from '../Loader'

afterAll(cleanup)

describe('Loader component tests', () => {
  const { getByTestId } = render(<Loader />)
  const loaderContainer = getByTestId('loader-container')

  test('Loader component is rendered properly', () => {
    expect(loaderContainer).toBeInstanceOf(HTMLDivElement)
    expect(loaderContainer.childElementCount).toBe(0)
  })

  test('Loader component rendered with correct style', () => {
    expect(loaderContainer).toHaveStyle(`
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
    `)
  })
})
