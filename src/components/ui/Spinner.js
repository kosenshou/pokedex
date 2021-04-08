import React from 'react'
import spinner from '../../img/pokeball-loading.gif'

const Spinner = () => {
  return (
    <img 
      src={spinner} 
      style={{ width: '100px', margin: 'auto', display: 'block', marginTop: '480px'}} 
      alt = 'Loading' 
    />
  )
}

export default Spinner
