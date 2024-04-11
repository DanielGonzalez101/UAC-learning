import React from 'react'
import { useContext } from 'react'
import Contexto from '../../Context/context'
const Home = () => {
  const {deslogearme} = useContext(Contexto)
  return (
    <div>
      <h1>Hume</h1>
      <button onClick={deslogearme}>Desloguearte</button>
    </div>
  )
}

export default Home