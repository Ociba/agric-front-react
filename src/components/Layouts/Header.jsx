import React, { Component } from 'react';
class Header extends Component {
    render() { 
        return (
            <header className="ltn__header-area ltn__header-3 section-bg-6">  
                <div className="ltn__header-top-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="ltn__top-bar-menu">
                                    <ul>
                                        <li><a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i className="icon-mail"></i> info@webmail.com</a></li>
                                        <li><a href="locations.html"><i className="icon-placeholder"></i> 15/A, Nest Tower, NYC</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="top-bar-right text-right text-end">
                                    <div className="ltn__top-bar-menu">
                                        <ul>
                                            <li>
                                                <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                                    <ul>
                                                        <li><a href="#" className="dropdown-toggle"><span className="active-currency">English</span></a>
                                                            <ul>
                                                                <li><a href="#">Arabic</a></li>
                                                                <li><a href="#">Bengali</a></li>
                                                                <li><a href="#">Chinese</a></li>
                                                                <li><a href="#">English</a></li>
                                                                <li><a href="#">French</a></li>
                                                                <li><a href="#">Hindi</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ltn__social-media">
                                                    <ul>
                                                        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                        
                                                        <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#" title="Dribbble"><i className="fab fa-dribbble"></i></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ltn__header-middle-area">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="site-logo">
                                    <a href="index.html"><img src="logo2.png" style={{borderRadius:'50%',height:'80px',with:'80px'}} alt="Logo"/></a>
                                </div>
                            </div>
                            <div className="col header-contact-serarch-column d-none d-lg-block">
                                <div className="header-contact-search">
                                    <div className="header-feature-item">
                                        <div className="header-feature-icon">
                                            <i className="icon-call"></i>
                                        </div>
                                        <div className="header-feature-info">
                                            <h6>Phone</h6>
                                            <p><a href="tel:0123456789">+0123-456-789</a></p>
                                        </div>
                                    </div>
                                    <div className="header-search-2">
                                        <form id="#123" method="get"  action="#">
                                            <input type="text" name="search" value="" placeholder="Search here..."/>
                                            <button type="submit">
                                                <span><i className="icon-search"></i></span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="ltn__header-options">
                                    <ul>
                                        <li className="d-none">
                                            <div className="ltn__drop-menu ltn__currency-menu">
                                                <ul>
                                                    <li><a href="#" className="dropdown-toggle"><span className="active-currency">USD</span></a>
                                                        <ul>
                                                            <li><a href="login.html">USD - US Dollar</a></li>
                                                            <li><a href="wishlist.html">CAD - Canada Dollar</a></li>
                                                            <li><a href="register.html">EUR - Euro</a></li>
                                                            <li><a href="account.html">GBP - British Pound</a></li>
                                                            <li><a href="wishlist.html">INR - Indian Rupee</a></li>
                                                            <li><a href="wishlist.html">BDT - Bangladesh Taka</a></li>
                                                            <li><a href="wishlist.html">JPY - Japan Yen</a></li>
                                                            <li><a href="wishlist.html">AUD - Australian Dollar</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="d-lg-none">
                                            <div className="header-search-wrap">
                                                <div className="header-search-1">
                                                    <div className="search-icon">
                                                        <i className="icon-search  for-search-show"></i>
                                                        <i className="icon-cancel  for-search-close"></i>
                                                    </div>
                                                </div>
                                                <div className="header-search-1-form">
                                                    <form id="#" method="get"  action="#">
                                                        <input type="text" name="search" value="" placeholder="Search here..."/>
                                                        <button type="submit">
                                                            <span><i className="icon-search"></i></span>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-none---"> 
                                            <div className="ltn__drop-menu user-menu">
                                                <ul>
                                                    <li>
                                                        <a href="#"><i className="icon-user"></i></a>
                                                        <ul>
                                                            <li><a href="login.html">Sign in</a></li>
                                                            <li><a href="register.html">Register</a></li>
                                                            <li><a href="account.html">My Account</a></li>
                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mini-cart-icon mini-cart-icon-2">
                                                <a href="#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
                                                    <span className="mini-cart-icon">
                                                        <i className="icon-shopping-cart"></i>
                                                        <sup>2</sup>
                                                    </span>
                                                    <h6><span>Your Cart</span> <span className="ltn__secondary-color">$89.25</span></h6>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom-area ltn__border-top ltn__header-sticky  ltn__sticky-bg-black--- ltn__sticky-bg-secondary ltn__secondary-bg section-bg-1 menu-color-white d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col header-menu-column justify-content-center">
                                <div className="sticky-logo">
                                    <div className="site-logo">
                                        <a href="index.html"><img src="logo2.png" style={{borderRadius:'50%',height:'80px',with:'80px'}} alt="Logo"/></a>
                                    </div>
                                </div>
                                <div className="header-menu header-menu-2">
                                    <nav>
                                        <div className="ltn__main-menu">
                                            <ul>
                                                <li><a href="#">Home</a> </li>
                                                <li><a href="#">About</a></li>
                                                <li className="menu-icon"><a href="#">Shop</a>
                                                    <ul>
                                                        <li><a href="shop.html">Vegetables</a></li>
                                                        <li><a href="shop-grid.html">Fruits</a></li>
                                                        <li><a href="shop-left-sidebar.html">Cereals</a></li>
                                                        <li><a href="shop-right-sidebar.html">Root Tubers</a></li>
                                                        <li><a href="product-details.html">Stem Tubers </a></li>
                                                        <li><a href="product-details-no-sidebar.html">Legumes </a></li>
                                                        <li><a href="product-details-no-sidebar.html">Animals </a></li>
                                                        <li><a href="product-details-no-sidebar.html">Birds </a></li>
                                                        <li><a href="product-details-no-sidebar.html">Fish </a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Equipments</a></li>
                                                <li><a href="#">Others</a></li>
                                                <li><a href="#">Gallery</a></li>
                                                <li><a href="#">News</a></li>
                                                <li><a href="http://localhost:8000/">Login | Register Now</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            );
        }
}
export default Header;