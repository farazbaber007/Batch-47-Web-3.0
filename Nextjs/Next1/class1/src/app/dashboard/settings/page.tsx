import Link from "next/link";

const Settings = () => {
    return(
        <>
            <div className=" p-5 text-lg font-bold"> 
                Settings
            </div>
            <div className="flex flex-col bg-slate-200 text-red-700 p-5">
                <Link href={"/dashboard/settings/password"}> Password</Link>
                <Link href={"/dashboard/settings/profile"}> Profile </Link>
            </div>
   
        </>
    );
}

export default Settings;