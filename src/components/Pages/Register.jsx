import React, {Component} from 'react';

class Register extends Component {
    render(){
        return (
            <div className='mt-30'>
                <div class="liton__wishlist-area pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                
                                <div class="ltn__product-tab-area">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="ltn__tab-menu-list mb-50">
                                                    <div class="about-us-info-wrap">
                                                        <div class="section-title-area ltn__section-title-2">
                                                            <h6 class="section-title">It Was An Sweet Journey Time<span>.</span></h6>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                        </div>
                                                        <div class="about-us-info-wrap-inner about-us-info-devide">
                                                            <div class="list-item-with-icon">
                                                                <ul>
                                                                    <li><a href="contact.html">24/7 Online Support</a></li>
                                                                    <li><a href="team.html">Expert Team</a></li>
                                                                    <li><a href="service-details.html">Pure Equipment</a></li>
                                                                    <li><a href="shop.html">Unlimited Product</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="tab-content">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                            {/* <p>The following addresses will be used on the checkout page by default.</p> */}
                                                            <div class="ltn__form-box">
                                                                <form action="#">
                                                                    <div class="row mb-10">
                                                                        <div class="col-md-6">
                                                                            <label>First name:</label>
                                                                            <input type="text" name="ltn__name" />
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label>Last name:</label>
                                                                            <input type="text" name="ltn__lastname" />
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label>Display Name:</label>
                                                                            <input type="text" name="ltn__lastname" placeholder="Ethan"/>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label>Display Email:</label>
                                                                            <input type="email" name="ltn__lastname" placeholder="example@example.com" />
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label>Display Name:</label>
                                                                            <input type="text" name="ltn__lastname" placeholder="Ethan"/>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label>Display Email:</label>
                                                                            <input type="email" name="ltn__lastname" placeholder="example@example.com" />
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label>Display Name:</label>
                                                                            <input type="text" name="ltn__lastname" placeholder="Ethan"/>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                        <label>Display Name:</label>
                                                                            <div class="input-item">
                                                                                <select class="nice-select">
                                                                                    <option>Select Service Type</option>
                                                                                    <option>Gardening </option>
                                                                                    <option>Landscaping </option>
                                                                                    <option>Vegetables Growing</option>
                                                                                    <option>Land Preparation</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label>Display Name:</label>
                                                                            <input type="text" name="ltn__lastname" placeholder="Ethan"/>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label>Display Email:</label>
                                                                            <input type="email" name="ltn__lastname" placeholder="example@example.com" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="btn-wrapper text-center">
                                                                        <button type="submit" class="btn btn-sm theme-btn-1 btn-effect-1 text-uppercase">Save Changes</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;