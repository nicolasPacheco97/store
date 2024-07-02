import { Link } from "react-router-dom"
import logo from "../../assets/teapot.png"
import { IoSearch } from "react-icons/io5"
function Header(){
    return <header className="flex justify-center z-20 relative">
        <nav className="w-full max-w-[1280px] px-5 flex justify-between items-center">
            <Link><img src={logo} className="w-14 md:w-20"></img></Link>
            <div className="flex gap-5 text-lg font-medium">
                <IoSearch cursor="pointer" size={25}/>
                <Link to={"product"}>Product</Link>
                <Link>Sing in</Link>
            </div>
        </nav>
    </header>
}

export default Header