import Mybutton from "@/components/Mybutton";
import DisplayingData from "@/components/DisplayingData";
import ConditionalRendering from "@/components/ConditionalRendering ";


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
        
        <div className="flex flex-col gap-5 p-5"> 
            react-learning page 
            
            <div className="text-xl font-extrabold">
                <div> Create a Component</div>
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
            <div className=" flex flex-col mt-5 font-bold">
                 Display Data
                 <DisplayingData />
            </div>

            <div className=" flex flex-col mt-5 font-bold">
                 Conditional Rendering
                 <ConditionalRendering />
            </div>

        </div>
    )
};

export default Reactlearn;