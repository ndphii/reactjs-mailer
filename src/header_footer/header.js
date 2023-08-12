import React from 'react';
import { Link } from 'react-router-dom';
import "../style/header.css"

class Header extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const myHeader = document.querySelector('.myHeader');
        if (myHeader) {
            if (window.scrollY > 100) {
                myHeader.classList.add('scrolled');
            } else {
                myHeader.classList.remove('scrolled');
            }
        }
    };
    render() {
        return (
            <>
                <nav className="navbar myHeader navbar-expand-lg navbar-dark sticky-top">
                    <div className="container ">
                        <Link className="navbar-brand fw-bold" to="/">VOCA VOCA</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll " >
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Toeic">Toeic</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contact">Contact</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Useful
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><Link className="dropdown-item" to="/">Grammar</Link></li>
                                        <li><Link className="dropdown-item" to="/">Useful websites</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/">Translation</Link></li>
                                    </ul>
                                </li>

                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-search d-flex justify-content-center align align-items-center" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                    </div >
                </nav >
            </>
        );

    }
}
export default Header;