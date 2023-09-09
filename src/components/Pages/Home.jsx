import React, { Component } from 'react';
import CategoriesAndSlider from './CategoriesAndSlider';
import HotSalesDeal from './HotSalesDeal';
import QuickSales from './QuickSales';
import TopCategories from './TopCategories';
import OurProducts from './OurProducts';
import SpecialOffer from './SpecialOffer';
import Partners from './Partners';
import Blog from './Blog';

class Home extends Component {

    render() {

        return (
            <React.Fragment>
                <CategoriesAndSlider />
                <QuickSales />
                <HotSalesDeal />
                <TopCategories />
                <OurProducts />
                <SpecialOffer />
                <Partners />
                <Blog />
            </React.Fragment>
        );
    }
}

export default Home;
