import React from 'react'
import Spinner from '../ui/Spinner'
import ItemCard from './ItemCard'

const ItemGrid = ({items, isLoading}) => {
  return isLoading ? (
    <Spinner />
  ) : (
  <section className="cards">
    {items.map(item => (
      <ItemCard key={item.name} item={item}/>
    ))}
  </section>
  )
}

export default ItemGrid
