import React from 'react'

const ItemCard = ({item}) => {
  return (
    <div className="card">
      <img style={{width: '70px'}} src={item.sprites.default} alt='' />
      <p>Name: {item.name.replace('-', ' ')}</p>
      <p>Cost: {item.cost}</p>
      <p>Effect:</p> <p>{item.effect_entries[0].effect}</p>
      
      Attributes: <ul>
      {item.attributes.map(attr => (
        <li><span/>{attr.name}</li>
      ))}
      </ul>
    </div>
  )
}

export default ItemCard
