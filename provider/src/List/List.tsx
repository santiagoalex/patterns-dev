import React from 'react'
import ListItem from './ListItem'


function List() {
  return (
    <section>
      <ul className="list">
        {new Array(10).fill(0).map((item, index) => (
          <ListItem key={index} />
        ))}
      </ul>
    </section>
  )
}

export default List