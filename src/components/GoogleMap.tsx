import * as React from 'react'
import GoogleMapsLoader from 'google-maps'
import styled from 'styled-components'
import { isEqual } from 'lodash'
import { IGoogleMapProps, IDriver } from '../Types';

const Container = styled.div`
  height: 100vh;
`
type GoogleMapState = {
  map: google.maps.Map | null
  google: GoogleMapsLoader.google | null
  markers: google.maps.Marker[] | null[]
}

class GoogleMap extends React.PureComponent<IGoogleMapProps, GoogleMapState> {
  private splytOffice = { lat: 51.5049375, lng: -0.0964509 }
  private mapRef: HTMLDivElement | null = null

  readonly state: GoogleMapState = {
    map: null,
    google: null,
    markers: []
  }

  componentDidUpdate(prevProps: IGoogleMapProps){
    if(!isEqual(prevProps.drivers, this.props.drivers)){
      console.log('component did update ......', this.props)
      // this.removeMarkers().then(() => this.setMarkers())
    }
  }

  componentWillUnmount(){
    this.setState(state => ({
      ...state,
      google: null,
      markers: [],
      map: null
    }))
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
          google,
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
            })
          }
          this.setMarkers()
        }
      )
    })
  }

  setMarkers = async () => {
    if (this.state.map && this.state.google) {
      const markerIcon: google.maps.ReadonlyIcon = {
        url: 'http://maps.google.com/mapfiles/kml/pal4/icon62.png',
        size: new this.state.google.maps.Size(80, 80)
      }
      this.setState(state => ({
        ...state,
        markers: this.props.drivers.map<google.maps.Marker>(driver =>
          new google.maps.Marker({
            map: this.state.map!,
            position: {
              lat: driver.location.latitude,
              lng: driver.location.longitude,
            },
            icon: markerIcon
          })
        )
      }))
    }
  }

  removeMarkers = async () => {
    this.state.markers.forEach((marker: google.maps.Marker | null) => {
      if(marker){
        marker.setMap(null)
        // tslint:disable-next-line:no-parameter-reassignment
        marker = null
      }
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
