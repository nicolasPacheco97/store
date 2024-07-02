import { Outlet } from "react-router-dom"
import Header from "../Header/Hedaer"

function Layout(){
    return <>
    <Header/>
    <Outlet/>
    </>
}

export default Layout