import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiShakeHandsLine } from '@remixicon/react'
import logo from '../../assets/images/logo/logo_fav.png'
import { menuList } from '../../utlits/fackData/menuList'

const Header = () => {
    const { pathname } = useLocation();  // Get the current path
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        navbarCollapse.classList.remove("show");
    }, [pathname]);

    useEffect(() => {
        window.addEventListener("scroll", stickyHeader);
        return () => window.removeEventListener("scroll", stickyHeader);
    }, []);

    const stickyHeader = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 85) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    return (
        <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">
                        {/* START LOGO DESIGN AREA */}
                        <div className="logo-outer">
                            <div className="logo">
                                <Link to="/"><img src={logo} alt="Logo" title="Logo" /></Link>
                            </div>
                        </div>
                        {/* END LOGO DESIGN AREA */}
                        {/* START NAV DESIGN AREA */}
                        <div className="nav-outer clearfix mx-auto">
                            {/* Main Menu */}
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo">
                                        <Link to="/"><img src={logo} alt="Logo" title="Logo" /> </Link>
                                    </div>
                                    {/* Toggle Button */}
                                    <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="navigation onepage clearfix">
                                        {menuList.map(({ id, label, path }) => (
                                            <li key={id}>
                                                <Link
                                                    to={path}
                                                    className={`nav-link-click ${pathname === path ? "active" : ""}`}
                                                >
                                                    {label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="menu-btns">
                            <Link to="/contact" className="theme-btn">
                                Hire Me <RiShakeHandsLine size={15} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
