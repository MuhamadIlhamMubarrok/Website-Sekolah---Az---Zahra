import { Link } from "@inertiajs/inertia-react";
import { IoIosPeople } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { BiNews } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Aside = ({ user }) => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4 relative">
            {/* Brand Logo */}
            <Link href={route("home")} className="brand-link">
                <img
                    src="../../dist/img/AdminLTELogo.png"
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: ".8" }}
                />
                <span className="brand-text font-weight-light">Az-Zahra</span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img
                            src="../../dist/img/user2-160x160.jpg"
                            className="img-circle elevation-2"
                            alt="User Image"
                        />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">
                            Hi!, {user.name}
                        </a>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                        <li className="nav-item">
                            <Link
                                href={route("dashboard")}
                                className="nav-link"
                            >
                                <IoIosPeople className="nav-icon inline-block text-xl mt-[-3px]" />
                                <p className="ml-1">Data Siswa</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={route("message")} className="nav-link">
                                <GrMail className="nav-icon inline-block text-xl mt-[-3px]" />
                                <p className="ml-1">Message</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={route("news")} className="nav-link">
                                <BiNews className="nav-icon inline-block text-xl mt-[-3px]" />
                                <p className="ml-1">AzzaNews</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
            <div className="absolute bottom-0 my-4">
                <hr className="text-white w-[250px]" />
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="text-white mx-2"
                >
                    <RiLogoutCircleRLine className="nav-icon inline-block text-xl mt-[-3px] mr-2" />
                    Log Out
                </Link>
            </div>
        </aside>
    );
};

export default Aside;
