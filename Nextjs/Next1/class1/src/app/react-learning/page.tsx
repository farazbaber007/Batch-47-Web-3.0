import Mybutton from "@/components/Mybutton";
import DisplayingData from "@/components/DisplayingData";
import ConditionalRendering from "@/components/ConditionalRendering ";
import RenderList from "@/components/RenderList";
import UpdatingState from "@/components/UpdatingState";
import Link from "next/link";


// fragment tag import {Fragment} from "react"; (key accept krta ha )
// <> </> empty tag is main key nhy accept hoti wrapper (without key)


// is file main he component bana  k return kr sktay hain.

function MyButton2() {
    return (
      <button className="p-3 bg-slate-100 text-xs rounded-lg">I'm a button2</button>
    );
  }



const Reactlearn=()=>{
    return (
        
     
        <div className="flex flex-col gap-5 p-5 "> 
            react-learning page 
            <Link href={"react-learning/advanced-learning"}> <button className="bg-gray-950 text-white rounded-md p-1"> Advanced Learning </button></Link>
            
            <div className="text-xl font-extrabold">
                <div className="text-green-500"> Create a Component</div>
                      Welcome to my app 
            </div>
            
            <div className="flex gap-2 space-x-5 "> 
                 <Mybutton /> 
                 <MyButton2 />
            </div>
            <div> Adding Styles 
                <p className="text=sm font-semibold">In React, you specify a CSS class with className. It works the same way as the HTML class attribute:

</p>
            </div>
            <div className=" flex flex-col mt-5 font-bold text ">
                 Display Data
                 <DisplayingData />
            </div>

            <div className=" flex flex-col mt-5 font-bold ">
                 Conditional Rendering
                 <ConditionalRendering />
            </div>
            <div className=" flex flex-col mt-5 font-bold ">
                 Rendering List Map function
                 <RenderList />
            </div>
            <div className=" flex flex-col mt-5 font-bold text-green-500">
                 State function
            </div>
            <div>      
                 <UpdatingState />
            </div>
            </div>
    )
};

export default Reactlearn;