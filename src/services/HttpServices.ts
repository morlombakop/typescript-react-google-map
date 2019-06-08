import { driversCount } from '../constants'

// Parses the JSON returned by a network request
const parseJSON = (response: Response) => {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  return response.json()
}

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (response: Response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(`${response.status} ${response.statusText}`)
  error.stack = JSON.stringify(response)
  throw error
}

// Fetch available drivers
export default async (count: number = driversCount) =>
  fetch(`http://localhost:5000/drivers?count=${count}`)
    .then(checkStatus)
    .then(parseJSON)
