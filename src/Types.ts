export interface ILocation {
  bearing: number
  latitude: number
  longitude: number
}

export interface IDriver {
  driver_id: string
  location: ILocation
}

export interface IBooking {
  pickup_eta: number
  drivers: IDriver[]
}

export interface ITravelMatrix {
  value: number
  text: string
}

export interface IGoogleMapProps {
  drivers: IDriver[]
}

export interface IRangeSliderProps {
  sliderValue: number;
  onSlideComplete: (sliderValue: number) => void
}
