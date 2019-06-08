import 'whatwg-fetch'
import faker from 'faker'
import fetchDrivers from '../HttpServices'

describe('HttServices test', () => {
  // Before each test, stub the fetch function
  beforeEach(() => {
    window.fetch = jest.fn();
  });

  describe('Stubbing successful response', () => {
    // Before each test, pretend we got a successful response
    beforeEach(() => {
      const res = new Response('{"hello":"world"}', {
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      });
      
      // @ts-ignore
      window.fetch.mockReturnValue(Promise.resolve(res));
    });

    test('HttpService formats the response correctly', done => {
      fetchDrivers(faker.random.number())
        .catch(done)
        .then(json => {
          expect(json.hello).toBe('world');
          done();
        });
    });
  });

  describe('Stubbing 204 response', () => {
    // Before each test, pretend we got a successful response
    beforeEach(() => {
      const res = new Response('', {
        status: 204,
        statusText: 'No Content',
      });

      // @ts-ignore
      window.fetch.mockReturnValue(Promise.resolve(res));
    });

    test('HttpService returns null on 204 response', done => {
      fetchDrivers(faker.random.number())
        .catch(done)
        .then(json => {
          expect(json).toBeNull();
          done();
        });
    });
  });

  describe('stubbing error response', () => {
    // Before each test, pretend we got an unsuccessful response
    beforeEach(() => {
      const res = new Response('', {
        status: 404,
        statusText: 'Not Found',
        headers: {
          'Content-type': 'application/json',
        },
      });

      // @ts-ignore
      window.fetch.mockReturnValue(Promise.resolve(res));
    });

    test('HttpServices should catch errors', done => {
      fetchDrivers(faker.random.number()).catch(err => {
        const response = JSON.parse(err.stack)
        expect(err.message).toBe('404 Not Found');
        expect(response.statusText).toBe('Not Found');
        expect(response.status).toBe(404);
        done();
      });
    });
  });
});