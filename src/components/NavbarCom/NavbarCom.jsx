import {Link} from "react-router-dom";

const NavbarCom = () => {
    return (
        <div>
            <header>
                {/* Start Navigation */}
                <nav className="navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark no-background">
                    <div className="container-fill d-flex justify-content-between align-items-center">
                        {/* Start Header Navigation */}
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#navbar-menu"
                            >
                                <i className="fa fa-bars" />
                            </button>
                            <a className="navbar-brand" href="/">
                                <img src="assets/img/logo.png" className="logo" alt="Logo" />
                            </a>
                        </div>
                        {/* End Header Navigation */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <img src="assets/img/logo.png" alt="Logo" />
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#navbar-menu"
                            >
                                <i className="fa fa-times" />
                            </button>
                            <ul
                                className="nav navbar-nav navbar-center"
                                data-in="fadeInDown"
                                data-out="fadeOutUp"
                            >
                                <li>
                                    <Link to={"/"}>BOSH SAHIFA</Link>
                                </li>
                                <li>
                                    <Link to={"/osago"}>OSAGO</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>KASKO</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>ALOQA</Link>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                        <div className="attr-right">
                            {/* Start Atribute Navigation */}
                            <div className="attr-nav">
                                <ul>
                                    <li className="button">
                                        <a href="tel:+998 (93) 512 53 24">+998 (93) 512 53 24</a>
                                    </li>
                                </ul>
                            </div>
                            {/* End Atribute Navigation */}
                            {/* Overlay screen for menu */}
                            <div className="overlay-screen" />
                            {/* End Overlay screen for menu */}
                        </div>
                        {/* Main Nav */}
                    </div>
                </nav>
                {/* End Navigation */}
            </header>
        </div>
    );
};

export default NavbarCom;