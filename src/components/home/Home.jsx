import React from 'react'
import { Carousel } from 'antd';
import HomeLanding from './HomeLanding'
import HomeVideo from './HomeVideo'
import HomeObjetivos from './HomeObjetivos'

const Home = () => {
  return (
    <div>
      <Carousel vertical autoplay>
        <HomeLanding />
        <HomeVideo />
        <HomeObjetivos />
      </Carousel>
    </div>
  )
}

export default Home