import 'jest-dom/extend-expect'
import 'jest-styled-components'
import * as React from 'react'
import { cleanup, render } from '@testing-library/react'
import Error from '../Error'

afterAll(cleanup)

describe('Error component tests', () => {
  const { getByTestId } = render(<Error />)
  const errorContainer = getByTestId('error-container')

  test('Error component renders properly', () => {
    expect(errorContainer).toMatchSnapshot()
    expect(errorContainer).toBeInstanceOf(HTMLDivElement)
    expect(errorContainer.childElementCount).toBe(2)
    expect(errorContainer.firstChild).toBeInstanceOf(HTMLHeadingElement)
    expect(errorContainer.lastChild).toBeInstanceOf(HTMLHeadingElement)
  })

  test('Error component renders with correct style', () => {
    expect(errorContainer).toHaveStyle(`
      margin: 0;
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    `)
    expect(errorContainer.firstChild).toHaveStyle(`
      color: red;
      text-align: center;
    `)
    expect(errorContainer.lastChild).toHaveStyle(`
      text-align: center;
      font-weight: normal;
    `)
  })

  test('Error component renders with correct content', () => {
    expect(errorContainer.firstChild).toHaveTextContent('Error')
    expect(errorContainer.lastChild).toHaveTextContent(
      'Please ensure you have an internet connection and reload the page.'
    )
  })
})
