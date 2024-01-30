import Link from "next/link";
import Analytics from "./analytics/page";


const Dashboard = () => {
    const user = {name: "Faraz" };
    return(<div className="p-12"> Dashboard
        <div>
          {/* <div>  Name: {user} </div> for testing error file */}
            <p className="text-lg font-bold"> nested route </p></div>
            <p> o create a nested route, you can nest folders inside each other. For example, you can add a new /dashboard/settings route by nesting two new folders in the app directory.</p>
    
    <div className="flex flex-col gap-5">
    {'HTML <a> Tag'}
    
    <p> 
            Definition and usage the {'<a>'} tag defines a hyperlink, which is used to link from one page to another.
            
    </p>
    <a 
        href="https://www.w3schools.com/tags/tag_a.asp" 
        className="font-bold text-red-500"  > 
        HTML Tag
    </a> 
    New Page
    <a 
        href={"https://www.w3schools.com/tags/tag_a.asp"} 
        className="font-bold text-red-500" 
        target="blank" > 
        HTML Tag
    </a> 

    <p> We always use Link Tag (because Data will not refetch by using this tag) first we use import Link from "next/link"</p>
    </div>
        <div className="mt-10 font-bold p-5 bg-slate-200 flex flex-col gap-5"> 
            <Link href={"/dashboard/analytics"} > Analytics </Link>
            <Link href={"/dashboard/settings"}> Settings </Link>

        </div>
    </div>
    );

}

export default Dashboard;