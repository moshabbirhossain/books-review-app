import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }
    return (
        <div className="navbar bg-base-100 space-x-8 lg:px-32 z-30 fixed">
            <div className="navbar-start ">
                <div className="dropdown space-y-0" aria-expanded={isMobileMenuOpen ? "true" : "false"}
                    onClick={toggleMobileMenu}>
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`${isMobileMenuOpen ? 'flex' : 'hidden'} menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                        <Link to={'/'} className="font-bold text-lg">
                            Home
                        </Link>

                        <Link to={'/listedBooks'} className="font-bold text-lg">
                            Listed Books
                        </Link>

                        <Link to={'/PagesToRead'} className="font-bold text-lg">
                            Pages to Read
                        </Link>
                    </ul>
                </div>
                <Link to={'/'} className="text-3xl lg:text-4xl font-bold text-[#23be0a] hover:text-[#20cf05] text-nowrap">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center gap-4">
                    <NavLink to={'/'} className={({isActive}) => isActive? 'border-2 border-lime-500 rounded-lg px-5 py-3 hover:bg-white text-lime-500 font-bold text-lg' : 'text-lg border-0 px-6 py-3 font-semibold'}>
                        Home
                    </NavLink>

                    <NavLink to={'/listedBooks'} className={({isActive}) => isActive? 'border-2 border-lime-500 rounded-lg px-5 py-3 hover:bg-white text-lime-500 font-bold text-lg' : 'text-lg border-0 px-6 py-3 font-semibold'}>
                        Listed Books
                    </NavLink>

                    <NavLink to={'/pagesToRead'} className={({isActive}) => isActive? 'border-2 border-lime-500 rounded-lg px-5 py-3 hover:bg-white text-lime-500 font-bold text-lg' : 'text-lg border-0 px-6 py-3 font-semibold'}>
                        Pages to Read
                    </NavLink>
                </ul>
            </div>
            <div className=" lg:navbar-end gap-x-2 lg:gap-4">
                <a className="btn bg-[#23be0a] hover:border-[#23be0a] hover:bg-white hover:text-black text-white text-base font-semibold lg:font-bold px-2 lg:px-3">Sign In</a>
                <a className="btn bg-[#68dfb7] hover:border-[#68dfb7] px-2 lg:px-3 text-white hover:bg-white hover:text-black text-base font-semibold lg:font-bold">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;
