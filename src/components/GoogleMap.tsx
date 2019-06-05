import * as React from 'react'
import GoogleMapsLoader from 'google-maps'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
`
type GoogleMapState = {
  map: google.maps.Map | null;
}

class GoogleMap extends React.PureComponent<{}, GoogleMapState> {
  private splytOffice = { lat: 51.5049375, lng: -0.0964509 }
  private mapRef: HTMLDivElement | null = null

  readonly state: GoogleMapState = {
    map: null,
  }

  getMapRef = (ref: HTMLDivElement | null): void => {
    this.mapRef = ref
  }

  initMap = () => {
    GoogleMapsLoader.KEY = 'AIzaSyAyTznkR5T3FOYaUMFViDCWNQeYVlhX0SA'
    GoogleMapsLoader.REGION = 'GB'

    GoogleMapsLoader.load(google => {
      this.setState(
        state => ({
          ...state,
          map: new google.maps.Map(this.mapRef, {
            zoom: 15,
            center: this.splytOffice,
          }),
        }),
        () => {
          if (this.state.map) {
            new google.maps.Marker({
              map: this.state.map,
              position: this.splytOffice,
              title: 'Hello World'
            })
          }
        }
      )
    })
  }

  render() {
    if(!this.state.map){
      this.initMap()
    }
    
    return <Container data-testid="map-container" ref={this.getMapRef} />
  }
}

export default GoogleMap
