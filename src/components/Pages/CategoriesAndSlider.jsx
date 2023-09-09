import React, {Component} from 'react'
import Categories from './Categories';
import MainSlider from './MainSlider';

class CategoriesAndSlider extends Component {
    render(){
        return (
        <div className="ltn__slider-area ltn__slider-3---  section-bg-1--- mt-30">
            <div className="container">
                <div className="row">
                    <Categories />
                    <MainSlider />
                </div>
            </div>
        </div>
        );
    }
}
export default CategoriesAndSlider;