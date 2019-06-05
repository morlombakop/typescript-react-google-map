// Parses the JSON returned by a network request
const parseJSON = (response: Response) => {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  console.log('absfaskfkhdafhk', response)
  return response.json()
}

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (response: Response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  throw new Error(JSON.stringify(response))
}

// Requests a URL, returning a promise
const request = async () => {
  const url =
    'https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509&count=1'
  const url1 = 'http://localhost:5000/map-test'
    return fetch(url1)
    .then(checkStatus)
    .then(parseJSON)
}

export default {
  request,
}
