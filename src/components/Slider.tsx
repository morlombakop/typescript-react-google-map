import React, { FC, useState } from 'react'

const Slider: FC<{}> = () => {
  const [range, setRange] = useState('20')

  const handleSlide = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setRange(target.value)
    console.log('Slider ....', range)
  }

  return (
    <input
      type="range"
      min="1"
      max="100"
      value={range}
      onChange={handleSlide}
    />
  )
}

export default Slider
