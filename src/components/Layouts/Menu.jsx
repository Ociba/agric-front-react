import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Menu extends Component {
    render(){
        return (
            <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
                <div className="ltn__utilize-menu-inner ltn__scrollbar">
                <div className="ltn__utilize-menu-head">
                    <div className="site-logo">
                        <a href="index.html"><img src="img/logo.png" alt="Logo"/></a>
                    </div>
                    <button className="ltn__utilize-close">×</button>
                </div>
                <div className="ltn__utilize-menu-search-form">
                    <form action="#">
                        <input type="text" placeholder="Search..."/>
                        <button><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="ltn__utilize-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><a href="#">Shop Now</a>
                            <ul className="sub-menu">
                                <li><Link to="/vegetables">Vegetables</Link></li>
                                <li><Link to="/fruits">Fruits</Link></li>
                                <li><Link to="/cereals">Cereals</Link></li>
                                <li><Link to="/root-tubers">Root Tubers</Link></li>
                                <li><Link to="/stem-tubers">Stem Tubers </Link></li>
                                <li><Link to="/animals">Animals</Link></li>
                                <li><Link to="/birds">Birds</Link></li>
                                <li><Link to="/legumes">Legumes</Link></li>
                                <li><Link to="/fish">Fish</Link></li>
                                <li><a href="account.html">My Account</a></li>
                                <li><a href="login.html">Sign in</a></li>
                                <li><a href="register.html">Register</a></li>
                            </ul>
                        </li>
                        <li><Link to="/equipments">Equipments</Link></li>
                        <li><Link to="/others">Others</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/farming-tips">Farming Tips</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><a href="http://localhost:8000">Login</a></li>
                    </ul>
                </div>
                <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                    <ul>
                        <li>
                            <a href="account.html" title="My Account">
                                <span className="utilize-btn-icon">
                                    <i className="far fa-user"></i>
                                </span>
                                My Account
                            </a>
                        </li>
                        <li>
                            <a href="wishlist.html" title="Wishlist">
                                <span className="utilize-btn-icon">
                                    <i className="far fa-heart"></i>
                                    <sup>3</sup>
                                </span>
                                Wishlist
                            </a>
                        </li>
                        <li>
                            <a href="cart.html" title="Shoping Cart">
                                <span className="utilize-btn-icon">
                                    <i className="fas fa-shopping-cart"></i>
                                    <sup>5</sup>
                                </span>
                                Shoping Cart
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ltn__social-media-2">
                    <ul>
                        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}
export default Menu;