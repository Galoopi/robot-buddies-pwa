import React from 'react';
import Card from './Card'

const CardList = ({robots}) => {
 //  if (true) {
 //    throw new Error('Oh NO!');
 // }

  const cardComponent = robots.map((user, i) => {
    return (
    <Card
      key={i}
      id={robots[i].id}
      name={robots[i].name}
      email={robots[i].email}
      phone={robots[i].phone}
      />
  )
  })

  return (
    <div>
      {cardComponent}
      </div>
  )
}
export default CardList;
