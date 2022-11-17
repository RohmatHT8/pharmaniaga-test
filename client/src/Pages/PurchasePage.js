import { Link } from "react-router-dom"
export default function PurchasePage() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Link to={'/login'}><p className="text-red-500 hover:text-red-600">Logout</p></Link> 
        </div>
    )
}