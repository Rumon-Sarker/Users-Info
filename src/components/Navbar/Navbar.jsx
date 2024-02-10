import { Link } from "react-router-dom";

const Navbar = () => {
    const naveItems = <>
        <li className="text-xl font-bold bg-gray-100 rounded"><Link to={"/"}>AllUsers</Link></li>
        <li className="text-xl font-bold bg-gray-100 rounded"><Link to={"/addusers"}>Add-Users</Link></li>

    </>
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {naveItems}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-green-700 font-bold ml-12 text-3xl">User{<span className="text-orange-700 -ml-2"> Info</span>}</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-12 px-1">
                    {naveItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;