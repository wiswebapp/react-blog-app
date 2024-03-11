import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    // let clickAboutUs = 0;
    const [aboutUsClickTxt, aboutUsClick] = useState(0);

    const aboutUsText = () => {
        aboutUsClick(aboutUsClickTxt + 1);
        alert("We are develoeprs !");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">React Blog App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">Create New Blog</Link>
                    </li>
                    <li className="nav-item"><a className="nav-link" style={{cursor: "pointer"}} onClick={aboutUsText}>About Us</a></li>
                    <li className="nav-item "><a className="nav-link disabled">You clicked {aboutUsClickTxt} times</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;