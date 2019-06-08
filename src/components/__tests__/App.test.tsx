import 'jest-dom/extend-expect'
import 'jest-styled-components'
import * as React from 'react'
import { cleanup, render, waitForElement } from '@testing-library/react'
import App from '../App'
import { driversCount } from '../../constants'
import { IBooking } from '../../Types'

jest.mock('../../services/HttpServices', () => jest.fn());
const fetchDrivers = require('../../services/HttpServices');
const mockBooking = {
  pickup_eta: 7,
  drivers: [
    {
      driver_id: "0_fooBar",
      location: {
        bearing: 23,
        latitude: 76899,
        longitude: 6788
      }
    }
  ]
}

/**
 * This block is to silent the act warning on the console,
 * Check up this https://github.com/testing-library/react-testing-library/issues/281 for more details.
 */
const originalError = console.error
beforeEach(() => {
  // @ts-ignore
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterEach(() => {
  console.error = originalError
  cleanup()
})

describe('App component tests', () => {
  test('App component renders with error', async () => {
    fetchDrivers.mockImplementation((driversCount: number) => Promise.reject<IBooking>())
    const { getByTestId } = render(<App />)

    expect(fetchDrivers).toHaveBeenCalledWith(driversCount)
    expect(await waitForElement(() => getByTestId('error-container'))).toBeInstanceOf(HTMLDivElement)
  })
 
  test("App component renders map & range slider", async () => {
    fetchDrivers.mockImplementation((driversCount: number) =>
      Promise.resolve<IBooking>(mockBooking)
    );
    const { getByTestId } = render(<App />)
    const appContainer = await waitForElement(() => getByTestId("app-container"));

    expect(fetchDrivers).toHaveBeenCalledWith(driversCount)
    expect(appContainer).toBeInstanceOf(HTMLDivElement);
    expect(appContainer).toHaveStyle(`
      width: 100%;
      height: 100vh;
      position: relative;
    `);
    expect(await waitForElement(() => getByTestId("map-container"))).toBeInstanceOf(HTMLDivElement);
    expect(await waitForElement(() => getByTestId("range-slider-container"))).toBeInstanceOf(HTMLDivElement);
  });

  test("App component renders loader", async () => {
    fetchDrivers.mockImplementation((driversCount: number) =>
      new Promise<IBooking>(resolve => {
        setTimeout(() => {
          resolve(mockBooking);
      }, 5000);
      })
    );
    const { getByTestId } = render(<App />)

    expect(fetchDrivers).toHaveBeenCalledWith(driversCount)
    expect(getByTestId("loader-container")).toBeInstanceOf(HTMLDivElement);
  });
})
