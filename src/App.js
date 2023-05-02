
import React,{useState} from 'react';
import './App.css';
import Search from './Search';
import CountryList from './CountryList';
import response from './response';
// import 'hk8-components';

const title='Country Filter'
function App(){
const[data,setData]=useState('');
console.log("response",response)


    return(
        <div className='Apps'> 
       
        <section className='w-30 justify-content-center layout-column mt-30 mx-auto'>

            <Search  setData={setData} />
            <CountryList  data={data} response={response} />

        </section>
           
        </div>
    )

}
export default App;