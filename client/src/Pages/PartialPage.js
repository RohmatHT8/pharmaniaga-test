import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";

export default function PartialPage() {
    return (
        <div className="h-screen w-screen bg-indigo-50 grid grid-cols-5">
            <div className="col-span-1">
                <SideBar />
            </div>
            <div className="col-span-4 h-screen overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}