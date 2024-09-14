import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 nav px-32">
            <div className="navbar-start">
                <div className="dropdown">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <Link to={'/'} className="font-bold">
                            Home
                        </Link>

                        <Link to={'/listedBooks'} className="font-bold">
                            Listed Books
                        </Link>

                        <Link to={'/pagedToRead'} className="font-bold">
                            Pages to Read
                        </Link>
                    </ul>
                </div>
                <Link to={'/'} className="text-4xl font-bold">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center gap-4">
                    <NavLink to={'/'} className={({isActive}) => isActive? 'border-2 border-lime-500 rounded-lg px-5 py-3 hover:bg-white text-lime-500 font-bold' : 'border-0 px-6 py-3 font-semibold'}>
                        Home
                    </NavLink>

                    <NavLink to={'/listedBooks'} className={({isActive}) => isActive? 'border-2 border-lime-500 rounded-lg px-5 py-3 hover:bg-white text-lime-500 font-bold' : 'border-0 px-6 py-3 font-semibold'}>
                        Listed Books
                    </NavLink>

                    <NavLink to={'/pagesToRead'} className={({isActive}) => isActive? 'border-2 border-lime-500 rounded-lg px-5 py-3 hover:bg-white text-lime-500 font-bold' : 'border-0 px-6 py-3 font-semibold'}>
                        Pages to Read
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn bg-lime-500 hover:bg-lime-500 text-white">Sign In</a>
                <a className="btn btn-accent text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;
