import React from 'react';

const Searchbox  = ({searchfield,searchChange}) => {
  return (
      <div className="tc pa2 ">

       <input
         aria-label='Search Robots'
         className="pa3 ba b--green bg-lightest-blue br-pill"
         type="search"
         placeholder='search Robots buddies'
         onChange= {searchChange} //event
       />

      </div>
  )
}
export default Searchbox;
