import React from 'react'


function Search(props){

   
    return(
        <div className="input">
        <input size="29" data-testid="filterInput" className='large' placeholder='Enter country name' onChange={(e)=>props.setData(e.target.value)}  />
        </div>)

}
export default Search;