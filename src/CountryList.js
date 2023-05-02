import React from 'react';

function CountryList(props){

    
    let filteredData=props.response.filter((item)=>(
        item.toLowerCase().includes(props.data.toLowerCase())
    ))

    return(
        <section>
           
              
                <select id="vvv" size="5" >
                {filteredData.map((item)=>{
                    return <option>{item}</option>
                })}
               
              
              </select>
        </section>
    )

}
export default CountryList;