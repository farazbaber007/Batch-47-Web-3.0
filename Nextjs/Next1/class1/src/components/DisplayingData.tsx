import Image from "next/image";
import image1 from '@/assets/images/tortoise.jpg' 
const DisplayingData = () => {
    const user = {
        name: "Faraz",
        Role: "admin",
        age:24,
        email: "farazbaber007@gmail.com",
        imageUrl: 'https://media.licdn.com/dms/image/D4E03AQGQMuj9zTCjbg/profile-displayphoto-shrink_200_200/0/1695676842841?e=1710979200&v=beta&t=ebskqL8BxP3f8CFTHGtteoxbJDTPWw6G_8ui7LHTnzU',
        imageSize: 90,
    }
  return (
    <div className="mt-2">
        <div className="flex flex-col"> My User Info </div>
        <div> 
           <div> Name:  {user.name} </div>
           <div> Age: {user.age} </div>
           <div> Role: {user.Role} </div>
           <div> Email: {user.email} </div>
          {/* <img 
          className="rounded-full" 
          src={user.imageUrl} 
           alt="image" /> */}
            
        <div className="flex gap-5"> 
            {<Image 
          className="rounded-full" 
          src={user.imageUrl} 
           alt="image" 
           width={100}
           height={100}
           />
           }


           
            {<Image 
          className="rounded-full" 
          src={image1} 
           alt="image" 
           width={100}
           height={100}
           />
           }
        </div>
        </div>
    </div>
  )
 }

export default DisplayingData;