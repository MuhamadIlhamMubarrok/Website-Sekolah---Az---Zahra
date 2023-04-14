import { Link } from "@inertiajs/inertia-react";

const Navbar = () => {
    return (
        <nav className="main-header navbar navbar-expand  md:w-[1330px]">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-widget="pushmenu"
                        href="#"
                        role="button"
                    >
                        <i className="fas fa-bars" />
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-widget="fullscreen"
                        href="#"
                        role="button"
                    >
                        <i className="fas fa-expand-arrows-alt" />
                    </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link href={route("home")} className="nav-link">
                        Home
                    </Link>
                </li>
            </ul>
            {/* Right navbar links */}
        </nav>
    );
};

export default Navbar;
