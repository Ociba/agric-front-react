import React, {Component} from 'react';

class QuickSales extends Component{
    render(){
        return (
            <div class="ltn__banner-area mt-120">
                <div class="container">
                    <div class="row ltn__custom-gutter--- justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="ltn__banner-item">
                                <div class="ltn__banner-img">
                                    <a href="shop.html"><img src="img/banner/1.jpg" alt="Banner Image"/></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="ltn__banner-item">
                                <div class="ltn__banner-img">
                                    <a href="shop.html"><img src="img/banner/2.jpg" alt="Banner Image"/></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="ltn__banner-item">
                                <div class="ltn__banner-img">
                                    <a href="shop.html"><img src="img/banner/3.jpg" alt="Banner Image"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default QuickSales;