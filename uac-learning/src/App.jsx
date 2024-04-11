import React from 'react'
import Provider from './Context/Provider'
import RutaPublicas from './Router/RutaPublicas'
function App() {
  return (
    <>
    <Provider>
    <RutaPublicas/>
    </Provider>
    </>
  )
}

export default App