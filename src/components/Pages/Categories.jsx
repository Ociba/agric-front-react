import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component{
    render(){
        return (
            <div class="col-lg-3">
                <div class="ltn__category-menu-wrap">
                    <div class="ltn__category-menu-title">
                        <h2 class="section-bg-2--- ltn__secondary-bg text-color-white">categories</h2>
                    </div>
                    <div class="ltn__category-menu-toggle ltn__one-line-active">
                        <ul>
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                                <Link to="/vegetables"><i class="icon-shopping-bags"></i>Vegetables </Link>
                                <ul class="ltn__category-submenu ltn__category-column-2">
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">All Vegetables</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/tomatoes">Tomatoes </Link></li>
                                            <li><Link to="/onions">Onions</Link></li>
                                            <li><Link to="/cabbages">Cabbage</Link></li>
                                            <li><Link to="/egg-plants">Egg Plants</Link></li>
                                            <li><Link to="/dodo">Dodo (Eboga)</Link></li>
                                        </ul>
                                    </li>
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">All Vegetables</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/sukuma-wich">Sukuma Wich</Link></li>
                                            <li><Link to="/nakati">Nakati</Link></li>
                                            <li><Link to="/entula">Entula</Link></li>
                                            <li><Link to="/green-papper">Green Papper</Link></li>
                                            <li><Link to="/red-papper">Red Papper</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                                <Link to="/cereals"><i class="icon-options"></i>Cereals </Link>
                                <ul class="ltn__category-submenu ltn__category-column-2" >
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">All Cereals</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/maize">Maize</Link></li>
                                            <li><Link to="/millet">Millet</Link></li>
                                            <li><Link to="/sorghum">Sorghum</Link></li>
                                            <li><Link to="/simsim">Simsim</Link></li>
                                        </ul>
                                    </li>
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">All Cereals</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/barley">Barley</Link></li>
                                            <li><Link to="/sunflower">Sunflower</Link></li>
                                            <li><Link to="/rice">Rice</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                                <Link to="/fruits"><i class="icon-award"></i>Fruits</Link>
                                <ul class="ltn__category-submenu ltn__category-column-3">
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Fruits</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/oranges">Oranges</Link></li>
                                            <li><Link to="/mangoes">Mangoes</Link></li>
                                            <li><Link to="/ovacado">Ovacado</Link></li>
                                            <li><Link to="/jack-fruit">Jack Fruit</Link></li>
                                            <li><Link to="/water-melon">Watermelon</Link></li>
                                        </ul>
                                    </li>
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Fruits</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/pineapples">Pineapples</Link></li>
                                            <li><Link to="/bananas">Bananas</Link></li>
                                            <li><Link to="/pawpaw">Pawpaw</Link></li>
                                            <li><Link to="/pumpkin">Pumpkin</Link></li>
                                            <li><Link to="/passion-fruits">Passion Fruits</Link></li>
                                        </ul>
                                    </li>
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Fruits</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/tamarind">Tamarind</Link></li>
                                            <li><Link to="/lemons">Lemons</Link></li>
                                            <li><Link to="/cashew-nuts">Cashew Nuts</Link></li>
                                            <li><Link to="/shea-butter-tree">Shea Butter Tree</Link></li>
                                            <li><Link to="/apples">Apples</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                                <Link to="/legumes"><i class="icon-user"></i>Legumes</Link>
                                <ul class="ltn__category-submenu ltn__category-column-2">
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Legumes</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/beans">Beans</Link></li>
                                            <li><Link to="/ground-nuts">Groundnuts</Link></li>
                                            <li><Link to="/cow-peas">Cow Peas</Link></li>
                                            <li><Link to="/green-grams">Green Gram</Link></li>
                                        </ul>
                                    </li>
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Legumes</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/soya-beans">Soya Beans</Link></li>
                                            <li><Link to="/pigeon-peas">Pigeon Peas</Link></li>
                                            <li><Link to="/kawo">Kawo</Link></li>
                                            <li><Link to="/bambara">Bambara Groundnuts</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                                <Link to="/root-tubers"><i class="icon-shopping-cart"></i>Root Tubers</Link>
                                <ul class="ltn__category-submenu ltn__category-column-2">
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Root Tubers</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/cassava">Cassava</Link></li>
                                            <li><Link to="/sweet-potatoes">Sweet Potatoes</Link></li>
                                            <li><Link to="/tumeric">Tumeric</Link></li>
                                            <li><Link to="/ginger">ginger</Link></li>
                                        </ul>
                                    </li>
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Root Tubers</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/carrots">Carrots</Link></li>
                                            <li><Link to="/irish-potatoes">Irish Potatoes</Link></li>
                                            <li><Link to="/yams">Yams</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                                <Link to="/stem-tubers"><i class="icon-tag"></i>Stem Tubers</Link>
                                <ul class="ltn__category-submenu">
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Stem Tubers</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/sugarcane">Sugarcane</Link></li>
                                            <li><Link to="/cassava-stems">Cassava Stems</Link></li>
                                            <li><Link to="/sweet-potatose-vines">Sweet Potatoes Vines</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                                <Link to="/animals"><i class="icon-shopping-bags"></i>Animals </Link>
                                <ul class="ltn__category-submenu ltn__category-column-2">
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Animals</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/cattle">Cattle</Link></li>
                                            <li><Link to="/goats">Goats</Link></li>
                                            <li><Link to="/sheep">Sheep</Link></li>
                                            <li><Link to="/pigs">Pigs</Link></li>
                                        </ul>
                                    </li>
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Animals</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/rabbits">Rabbits</Link></li>
                                            <li><Link to="/dogs">Dogs</Link></li>
                                            <li><Link to="/cats">Cats</Link></li>
                                            <li><Link to="/donkeys">Donkeys</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                                <Link to="/birds"><i class="icon-options"></i>Birds</Link>
                                <ul class="ltn__category-submenu ltn__category-column-2">
                                <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Birds</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/chicken">Chicken</Link></li>
                                            <li><Link to="/turkeys">Turkeys</Link></li>
                                            <li><Link to="/pigeons">Pigeons</Link></li>
                                        </ul>
                                    </li>
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Birds</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/guinea-fowls">Guinea Fowls</Link></li>
                                            <li><Link to="/ducks">Ducks</Link></li>
                                            <li><Link to="/quails">Quails</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                                <Link to="/fish"><i class="icon-options"></i>Fish</Link>
                                <ul class="ltn__category-submenu ltn__category-column-2">
                                <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Fish</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/nile-perch">Nile Perch</Link></li>
                                            <li><Link to="/tilapia">Tilapia</Link></li>
                                            <li><Link to="/cat-fish">Cat fFish</Link></li>
                                        </ul>
                                    </li>
                                    <li class="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Fish</a>
                                        <ul class="ltn__category-submenu-children">
                                            <li><Link to="/lung-fish">Lung Fish</Link></li>
                                            <li><Link to="/mud-fish">Mud Fish</Link></li>
                                            <li><Link to="/silver-fish">Silver Fish</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="ltn__category-menu-more-item-parent">
                                <Link to="/honey" class="rx-default"> <i class="icon-options"></i>Beehives & Honey </Link>
                                <a class="rx-show">
                                    close menu <span class="cat-thumb  icon-remove"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Categories