import Image from "next/image"
import logo from "/public/logo.webp"
import Link from "next/link"
import { CgShoppingCart } from "react-icons/cg"


const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <Image src={logo} alt="logo" className="w-40"/>
      <ul className="flex gap-x-3"> 
        <li className="text-lg"> 
          <Link href={"/"}> Female </Link> </li> 
        <li className="text-lg"> <Link href={"/"}> Male </Link> </li> 
        <li className="text-lg"> <Link href={"/"}> Kids </Link> </li> 
        <li className="text-lg"> <Link href={"/"}> All Products </Link> </li> 
      </ul>
    
      
    <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center" >
      <CgShoppingCart className="w-6 h-6" /> 
    </div>
      
    </div>
  )
}

export default Header
