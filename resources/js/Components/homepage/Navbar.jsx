import { Link } from "@inertiajs/inertia-react";
import { FiLogIn } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-[#439A97]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#439A97] rounded-box w-52 text-white"
                    >
                        <li>
                            <Link
                                href={route("home")}
                                className="text-white "
                                as="button"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("azzanews")}
                                className="text-white"
                                as="button"
                            >
                                Azza News
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("contact")}
                                className="text-white"
                                as="button"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link
                    href={route("home")}
                    as="button"
                    className="btn
                     btn-ghost
                      normal-case
                       text-xl
                        text-white"
                >
                    Az-Zahra
                </Link>
            </div>
            <div className="navbar-center
             hidden 
             lg:flex">
                <ul className="menu
                 menu-horizontal
                  px-1">
                    <li>
                        <Link
                            href={route("home")}
                            className="text-white"
                            as="button"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route("azzanews")}
                            className="text-white"
                            as="button"
                        >
                            Azza News
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route("contact")}
                            className="text-white"
                            as="button"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className="navbar-end mr-7">
                {!user ? (
                    <li>
                        <Link
                            href={route("login")}
                            className="text-white btn btn-ghost normal-case font-plusjktsans font-normal"
                            as="button"
                        >
                            <FiLogIn className="inline" /> Login
                        </Link>
                    </li>
                ) : (
                    <div className="dropdown dropdown-end">
                        <div className="flex justify-center items-center">
                            <div className="inline-block mr-2">
                                <p className="text-white">Hi, {user.name}</p>
                            </div>
                            <label tabIndex={0} className="">
                                <div className="avatar online">
                                    <div className="w-[40px] rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </label>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link href={route("dashboard")}>
                                    <MdSpaceDashboard className="text-xl" />
                                    Dashboard
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link href={route("logout")}>
                                    {" "}
                                    <RiLogoutCircleRLine className="  text-xl" />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
