

const DisplayingData = () => {
    const user = {
        name: "Faraz",
        Role: "admin",
        age:24,
        email: "farazbaber007@gmail.com",
    }
  return (
    <div className="mt-2">
        <div className="flex flex-col"> My User Info </div>
        <div> 
           <div> Name:  {user.name} </div>
           <div> Age: {user.age} </div>
           <div> Role: {user.Role} </div>
           <div> Email: {user.email} </div>
            
        </div>
    </div>
  )
 }

export default DisplayingData;