import p1 from "/public/p1.webp"
import React from 'react'
import Image from "next/image"
import ProductCard from "@/components/ProductCard"

const ProductList = () => {
  return (
        // <div> 
        //   <Image src={p1} alt="" /> 
        //  <h3 className="font-bold text-lg mt-3"> Shirt </h3> 
        //  <p className="font-bold text-lg "> $40 </p> 
        // </div>

    <div className="flex justify-evenly mt-16">
        <ProductCard title="Sweat Shirt" price={100} img={p1} /> 
        <ProductCard title="Shirt" price={104} img={p1}/> 
        <ProductCard title="Jacket" price={109} img={p1}/>
        <ProductCard title="Empty" price={300} img={p1} />

        
    </div>
  )
}

export default ProductList



