import React, { useContext } from 'react';
import { Mycontext } from './Main';

const Products = () => 
{
    const data = useContext(Mycontext);
    return (
        <div>
            <h1> this is product page </h1>
            <h1>here next is , {data.value.next}</h1>
            <button onClick = {()=>{data.change({type : "ADD"})}}> change </button>
            <button onClick = {()=>{data.change({type : "SUB"})}}> change </button>
        </div>
    )
}

export default Products;
