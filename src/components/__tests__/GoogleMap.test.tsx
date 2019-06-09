import 'jest-dom/extend-expect'
import 'jest-styled-components'
import * as React from 'react'
import { cleanup, render, waitForElement } from '@testing-library/react'
import GoogleMap from '../GoogleMap'
import { IDriver } from '../../Types'

afterAll(cleanup)

describe('GoogleMap component tests', () => {
  const drivers: IDriver[] = [
    {
      driver_id: '0_fooBar',
      location: {
        bearing: 23,
        latitude: 76899,
        longitude: 6788,
      },
    },
  ]

  test('GoogleMap component renders properly', async () => {
    const componentDidMount = jest.spyOn(GoogleMap.prototype, 'componentDidMount')
    const { getByTestId } = render(<GoogleMap drivers={drivers} />)
    const mapContainer = await waitForElement(() => getByTestId('map-container'))

    expect(mapContainer).toBeInstanceOf(HTMLDivElement)
    expect(mapContainer.childElementCount).toBe(0)
    expect(mapContainer).toHaveStyleRule('height', '100vh')
    expect(componentDidMount).toBeCalledTimes(1)
  })
})
