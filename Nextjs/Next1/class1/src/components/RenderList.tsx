
import React from 'react'

function RenderList() {
    const products = [
        {title: "cabbage", id: 1},
        {title: "garlic", id: 2},
        {title: "Apple", id: 3},
        {title: "Apple", id: 4},
        {title: "Apple", id: 5},
        {title: "pineApple", id: 6},
        {title: "Apple", id: 7},
        {title: "Apple", id: 8},
        {title: "pineApple", id: 9},

    ];

  return (
    <>
    <div>RenderList </div>
      {/* <h5> mannual list </h5>  */}
    <div className='flex flex-col gap-5'> 
    <p> {products[0].title} </p>
    <p> {products[1].title} </p>
    <p> {products[2].title} </p>
    </div> 
    
    
    <div className='flex gap-2 py-5 text-rose-500'  > Map function </div>
     
    <ul>
    {products.map((abc)=>{
        return<li key={abc.id}>   
            {abc.title} </li>;
    })}
    </ul>
    </>
  ) 
}

export default RenderList