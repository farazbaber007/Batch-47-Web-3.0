import React from 'react'

const conditionalRendering  = () => {
    let content;
    let isLoggedIn = true;
    let newCondition=false;
    let newCondition1=true;
if (isLoggedIn) {
  content = <div>admin panel true</div>;
} else {
  content = <div> Log in panel false</div> ;
}

// alway condition ? : in markup language
return (
  <div className='flex flex-col p-15 gap-5'>
    {content}
    f you prefer more compact code, you can use the conditional ? operator. Unlike if, it works inside JSX:
    {newCondition ? <div className='bg-slate-500'> condition true </div> : <div className='bg-blue-600'> Condition False </div>}
    {newCondition1 && <div className='bg-red-400'> And condition true </div> }
  </div>
);
 
}

export default conditionalRendering 