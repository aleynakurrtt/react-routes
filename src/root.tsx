import { Outlet } from "react-router-dom"
import NavbarPage from "./components/Navbar"


function RootLayout() {
    return (
        <>
            <NavbarPage />
            <Outlet />
        </>
    )
}

export default RootLayout