import { Component } from "react";
import {
    Link
  } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/buisness">buisness</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">general</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}