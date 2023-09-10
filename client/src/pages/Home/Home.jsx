import React from 'react'
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts'
import Slider from '../../components/Slider/slider'
import "./Home.scss"
import Categories from '../../components/Categories/Categories'
import Contacts from '../../components/Contacts/Contacts'
const Home = () => {
  return (
    <div className='home'>
      <Slider/>  
      <FeatureProducts type="trending" />
      <Categories/>
      <FeatureProducts type="featured" />
      <Contacts/>
    </div>
  )
}

export default Home