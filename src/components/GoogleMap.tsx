import * as React from 'react'
import GoogleMapsLoader from 'google-maps'
import styled from 'styled-components'
import { IGoogleMapProps } from '../Types';

const Container = styled.div`
  height: 100vh;
`
class GoogleMap extends React.PureComponent<IGoogleMapProps> {
  private splytOffice = { lat: 51.5049375, lng: -0.0964509 }
  private mapRef: HTMLDivElement | null = null

  componentDidMount(){
    this.loadMap()
  }

  getMapRef = (ref: HTMLDivElement | null): void => {
    this.mapRef = ref
  }

  loadMap = () => {
    GoogleMapsLoader.KEY = 'AIzaSyAyTznkR5T3FOYaUMFViDCWNQeYVlhX0SA'
    GoogleMapsLoader.REGION = 'GB'
    
    GoogleMapsLoader.load(google => {
      const map = new google.maps.Map(this.mapRef, {
        zoom: 13,
        center: this.splytOffice,
      })

      this.buildMarkers(map, google);
    })
  }

  buildMarkers = (map: google.maps.Map, google: GoogleMapsLoader.google) => {
    const markerIcon: google.maps.ReadonlyIcon = {
      url: 'http://maps.google.com/mapfiles/kml/pal4/icon62.png',
      size: new google.maps.Size(80, 80),
    }
    
    // User location marker
    new google.maps.Marker({
      map,
      position: this.splytOffice,
    })

    return this.props.drivers.map<google.maps.Marker>(
      driver =>
        new google.maps.Marker({
          map,
          position: {
            lat: driver.location.latitude,
            lng: driver.location.longitude,
          },
          icon: markerIcon,
        })
    )
  }

  render() {
    return <Container ref={this.getMapRef} data-testid="map-container"/>
  }
}

export default GoogleMap
