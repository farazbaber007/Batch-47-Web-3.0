    import React from 'react'
import Index from '.'

function FilterableProductTable ({products}:any) {
  return (
    <div className='py-5'>
       <form className='flex flex-col gap-2 px-4'>
            <input className='border' type="text" placeholder="Search. Any .Product." />
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
        <div> 
            {products.map((products:any, Index:number)=>{
                return
                <div key={Index}>
                    {products.name} 
                </div> })}
        </div>
    
    </div>
  )
}

export default FilterableProductTable 