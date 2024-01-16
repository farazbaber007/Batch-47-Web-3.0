"use client"
// hum ny component ka folder src kay folder main banana ha
// Name function  b use kr sktay hain or 
// arrow function b use kr sktay hain mostly arrow he use krtay hain.
// component kay Name ka first letter capital ho ga. otherwise issues ain gay.
// web events, hooks (react stats) ,  ye sub client side per he hoty hain to us k lye "use client" use krtay hain top of file.
// onClick event (function bana k alert ka then isko pass krna ha onclick={click} isko call ni krna (xxxonClick()xxxx) otherwise application crash ho jaye gy




const Mybutton=()=>{
    const handleClick=() => {
        alert("hello, you clicked me!")
    }
    return(
        <div className="flex flex-col gap-5 p-3">
        <div><button className="bg-red-100 rounded-md p-1" onClick={handleClick}> Hello i'm  button </button></div>
        (Web Events, React hooks are all client component.)
        (to make client component alwyas use "use client" on top of the file sirf ye button client component ban jaye ga baqi same he rahin gay. ) 

        </div>

    );
};

export default Mybutton; // agar export ni krna to object main export kr k use kr sktay hain.
