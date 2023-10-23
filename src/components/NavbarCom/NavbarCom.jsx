import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

function useDispatch() {
    return undefined;
}

const NavbarCom = () => {

    //i18n
    const {t, i18n} = useTranslation();
    const changingLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem("lang", language);
        window.location.reload();
    };
    //i18n

    const dispatch = useDispatch();

    const notActive = {
        color: "black",
    };

    const activeStyle = {
        color: "white",
    };
    const currentPath = useLocation().pathname;


    return (
        <div>
            <header>
                {/* Start Navigation */}
                <nav style={currentPath === "/osago" ? activeStyle : notActive}
                     className="navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark no-background">
                    <div className="container-fill d-flex justify-content-between align-items-center">
                        {/* Start Header Navigation */}
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#navbar-menu"
                            >
                                <i className="fa fa-bars"/>
                            </button>
                            <a className="navbar-brand" href="/">
                                <img src="assets/img/logo.png" className="logo" alt="Logo"/>
                            </a>
                        </div>
                        {/* End Header Navigation */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <img src="assets/img/logo.png" alt="Logo"/>
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#navbar-menu"
                            >
                                <i className="fa fa-times"/>
                            </button>
                            <ul
                                className="nav navbar-nav navbar-center"
                                data-in="fadeInDown"
                                data-out="fadeOutUp"
                            >
                                <li>
                                    <Link to={"/"}>{t("nav.home")}</Link>
                                </li>
                                <li>
                                    <Link to={"/osago"}>{t("nav.osago")}</Link>
                                </li>

                                <li>
                                    <Link to={"/"}>{t("nav.kasko")}</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>{t("nav.contact")}</Link>
                                </li>
                                <li className="dropdown">
                                    <div className="language">
                                        <select
                                            onChange={(e) => changingLanguage(e.target.value)}
                                            name="format"
                                            id="format"
                                        >
                                            <option value="" selected disabled>{localStorage.getItem("lang")}</option>
                                            {localStorage.getItem("lang") !== "uz" ?
                                                <option value="uz">uz</option> : ""}
                                            {localStorage.getItem("lang") !== "ru" ?
                                                <option value="ru">ru</option> : ""}
                                            {localStorage.getItem("lang") !== "en" ?
                                                <option value="en">en</option> : ""}
                                        </select>
                                    </div>

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
                            <div className="overlay-screen"/>
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