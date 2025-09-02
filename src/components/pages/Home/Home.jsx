import React from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Exploremenu from '../../Exploremenu/Exploremenu'

const Home = () => {
  const [category, setCategory] = React.useState('all');


  return (
    <div>

      <Header/>
      <Exploremenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home