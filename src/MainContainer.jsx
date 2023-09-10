import React, {Component} from 'react';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Menu from './components/Layouts/Menu'; 
import MobileHeader from './components/Layouts/MobileHeader';
import Modals from './components/Layouts/Modals';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Animals from './components/Pages/Animals';
import Birds from './components/Pages/Birds';
import Cereals from './components/Pages/Cereals';
import Equipments from './components/Pages/Equipments';
import Fruits from './components/Pages/Fruits';
import Feeds from './components/Pages/Feeds';
import Fish from './components/Pages/Fish';
import ForgotPassword from './components/Pages/ForgotPassword';
import Legumes from './components/Pages/Legumes';
import Others from './components/Pages/Others';
import Register from './components/Pages/Register';
import RootTubers from './components/Pages/RootTubers';
import StemTubers from './components/Pages/StemTubers';
import Vegetables from './components/Pages/Vegetables';
import Gallery from './components/Pages/Gallery';
import News from './components/Pages/News';
import SuccessfulAddedToCart from './components/Layouts/SuccessfulAddedToCart';
import QuickView from './components/Layouts/QuickView';
import AddToWishlistPopup from './components/Layouts/AddToWishlistPopup';

import  Tomatoes from './components/Vegetables/Tomatoes';
import FarmingTips from './components/Pages/FarmingTips';
import  Onions from './components/Vegetables/Onions';
import  Cabbage from './components/Vegetables/Cabbage';
import  EggPlant from './components/Vegetables/EggPlant';
import  Dodo from './components/Vegetables/Dodo';
import  SukumaWik from './components/Vegetables/SukumaWik';
import  Nakati from './components/Vegetables/Nakati';
import  Entula from './components/Vegetables/Entula';
import  GreenPapper from './components/Vegetables/GreenPapper';
import  RedPapper from './components/Vegetables/RedPapper';

import  Maize from './components/Cereals/Maize';
import  Millet from './components/Cereals/Millet';
import  Simsim from './components/Cereals/Simsim';
import  Sorghum from './components/Cereals/Sorghum';
import  Barley from './components/Cereals/Barley';
import  Sunflower from './components/Cereals/Sunflower';
import  Rice from './components/Cereals/Rice';

import  Oranges from './components/Fruits/Oranges';
import  Mangoes from './components/Fruits/Mangoes';
import  Ovacado from './components/Fruits/Ovacado';
import  WaterMelon from './components/Fruits/WaterMelon';
import  JackFruit from './components/Fruits/JackFruit';
import  Pineapples from './components/Fruits/Pineapples';
import  Bananas from './components/Fruits/Bananas';
import  Pawpaw from './components/Fruits/Pawpaw';
import  Pumpkin from './components/Fruits/Pumpkin';
import  PassionFruits from './components/Fruits/PassionFruits';
import  CashewNuts from './components/Fruits/CashewNuts';
import  SheaButterTree from './components/Fruits/SheaButterTree';
import  Lemons from './components/Fruits/Lemons';
import  Tamarind from './components/Fruits/Tamarind';
import  Apples from './components/Fruits/Apples';

import  Beans from './components/Legumes/Beans';
import  Groundnuts from './components/Legumes/Groundnuts';
import  Cowpeas from './components/Legumes/Cowpeas';
import  GreenGram from './components/Legumes/GreenGram';
import  PigeonPeas from './components/Legumes/PigeonPeas';
import  SoyaBeans from './components/Legumes/SoyaBeans';
import  Kawo from './components/Legumes/Kawo';
import  BambaraGroundnuts from './components/Legumes/BambaraGroundnuts';

import  Cassava from './components/RootTubers/Cassava';
import  SweetPotatoes from './components/RootTubers/SweetPotatoes';
import  Ginger from './components/RootTubers/Ginger';
import  Tumeric from './components/RootTubers/Tumeric';
import  IrishPotatoes from './components/RootTubers/IrishPotatoes';       
import  Carrots from './components/RootTubers/Carrots';
import  Yams from './components/RootTubers/Yams';

import  Sugarcane from './components/StemTubers/Sugarcane';
import  CassavaStems from './components/StemTubers/CassavaStems';
import  SweetPotatoesVines from './components/StemTubers/SweetPotatoesVines';

import  Cattle from './components/Animals/Cattle';
import  Goats from './components/Animals/Goats';
import  Sheep from './components/Animals/Sheep';
import  Pigs from './components/Animals/Pigs';
import  Rabbits from './components/Animals/Rabbits';
import  Dogs from './components/Animals/Dogs';
import  Cats from './components/Animals/Cats';
import  Donkeys from './components/Animals/Donkeys';

import  Chicken from './components/Birds/Chicken';
import  Turkeys from './components/Birds/Turkeys';
import  Pigeons from './components/Birds/Pigeons';
import  GuineaFowls from './components/Birds/GuineaFowls';
import  Ducks from './components/Birds/Ducks';
import  Quails from './components/Birds/Quails';

import  NilePerch from './components/Fish/NilePerch';
import  Tilapia from './components/Fish/Tilapia';
import  CatFish from './components/Fish/CatFish';
import  LungFish from './components/Fish/LungFish';
import  MudFish from './components/Fish/MudFish';
import  SilverFish from './components/Fish/SilverFish';

import  Honey from './components/Pages/Honey';
import  ProductDetails from './components/Pages/ProductDetails';

class MainContainer extends Component {
  render (){
    return (
      <div className="body-wrapper">
        <Router>
            <Header />
            <Modals />
            <Menu/>
            <div className="ltn__utilize-overlay"></div>
                <MobileHeader />
                  <div className=''>
                    <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/animals" element={<Animals/>} />
                    <Route path="/birds" element={<Birds/>} />
                    <Route path="/cereals" element={<Cereals/>} />
                    <Route path="/equipments" element={<Equipments/>} />
                    <Route path="/fruits" element={<Fruits/>} />
                    <Route path="/feeds" element={<Feeds/>} />
                    <Route path="/fish" element={<Fish/>} />
                    <Route path="/forgot-passwords" element={<ForgotPassword/>} />
                    <Route path="/legumes" element={<Legumes/>} />
                    <Route path="/others" element={<Others/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/root-tubers" element={<RootTubers/>} />
                    <Route path="/stem-tubers" element={<StemTubers/>} />
                    <Route path="/vegetables" element={<Vegetables/>} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/news" element={<News/>} />
                    <Route path="/farming-tips" element={<FarmingTips/>} />

                    <Route path='/tomatoes' element={<Tomatoes />} />
                    <Route path='/onions' element={<Onions />} />
                    <Route path='/cabbages' element={<Cabbage />} />
                    <Route path='/egg-plants' element={<EggPlant />} />
                    <Route path='/dodo' element={<Dodo />} />
                    <Route path='/sukuma-wich' element={<SukumaWik />} />
                    <Route path='/nakati' element={<Nakati />} />
                    <Route path='/entula' element={<Entula />} />
                    <Route path='/green-papper' element={<GreenPapper />} />
                    <Route path='/red-papper' element={<RedPapper />} />
                    
                    <Route path='/maize' element={<Maize />} />
                    <Route path='/millet' element={<Millet />} />
                    <Route path='/sorghum' element={<Sorghum />} />
                    <Route path='/simsim' element={<Simsim />} />
                    <Route path='/barley' element={<Barley />} />
                    <Route path='/sunflower' element={<Sunflower />} />
                    <Route path='/rice' element={<Rice />} />

                    <Route path='/oranges' element={<Oranges />} />
                    <Route path='/mangoes' element={<Mangoes />} />
                    <Route path='/ovacado' element={<Ovacado />} />
                    <Route path='/water-melon' element={<WaterMelon />} />
                    <Route path='/jack-fruit' element={<JackFruit />} />
                    <Route path='/bananas' element={<Bananas />} />
                    <Route path='/pineapples' element={<Pineapples />} />
                    <Route path='/pawpaw' element={<Pawpaw />} />
                    <Route path='/pumpkin' element={<Pumpkin />} />
                    <Route path='/passion-fruits' element={<PassionFruits />} />
                    <Route path='/cashew-nuts' element={<CashewNuts />} />
                    <Route path='/shea-butter-tree' element={<SheaButterTree />} />
                    <Route path='/lemons' element={<Lemons />} />
                    <Route path='/tamarind' element={<Tamarind />} />
                    <Route path='/apples' element={<Apples />} />

                    <Route path="/beans" element={<Beans />} />
                    <Route path="/ground-nuts" element={<Groundnuts />} />
                    <Route path="/cow-peas" element={<Cowpeas />} />
                    <Route path="/green-grams" element={<GreenGram />} />
                    <Route path='/pigeon-peas' element={<PigeonPeas />} />
                    <Route path='/soya-beans' element={<SoyaBeans />} />
                    <Route path='/kawo' element={<Kawo />} />
                    <Route path='/bambara' element={<BambaraGroundnuts />} />

                    <Route path='/cassava' element={<Cassava />} />
                    <Route path='/sweet-potatoes' element={<SweetPotatoes />} />
                    <Route path='/ginger' element={<Ginger />} />
                    <Route path='/tumeric' element={<Tumeric />} />
                    <Route path='/irish-potatoes' element={<IrishPotatoes />} />
                    <Route path='/carrots' element={<Carrots />} />
                    <Route path='/yams' element={<Yams />} />

                    <Route path='/sugarcane' element={<Sugarcane />} />
                    <Route path='/cassava-stems' element={<CassavaStems />} />
                    <Route path='/sweet-potatose-vines' element={<SweetPotatoesVines />} />

                    <Route path='/cattle' element={<Cattle />} />
                    <Route path='/goats' element={<Goats />} />
                    <Route path='/sheep' element={<Sheep />} />
                    <Route path='/pigs' element={<Pigs />} />
                    <Route path='/rabbits' element={<Rabbits />} />
                    <Route path='/dogs' element={<Dogs />} />
                    <Route path='/cats' element={<Cats />} />
                    <Route path='/donkeys' element={<Donkeys />} />

                    <Route path='/chicken' element={<Chicken />} />
                    <Route path='/turkeys' element={<Turkeys />} />
                    <Route path='/pigeons' element={<Pigeons />} />
                    <Route path='/guinea-fowls' element={<GuineaFowls />} />
                    <Route path='/ducks' element={<Ducks />} />
                    <Route path='/quails' element={<Quails />} />

                    <Route path='/nile-perch' element={<NilePerch />} />
                    <Route path='/tilapia' element={<Tilapia />} />
                    <Route path='/cat-fish' element={<CatFish />} />
                    <Route path='/lung-fish' element={<LungFish />} />
                    <Route path='/mud-fish' element={<MudFish />} />
                    <Route path='/silver-fish' element={<SilverFish />} />

                    <Route path='/honey' element={<Honey />} />
                    <Route path='/product-details' element={<ProductDetails />} />

                    </Routes>
                  </div>
            <Footer/>
            <SuccessfulAddedToCart />
            <QuickView />
            <AddToWishlistPopup />
      </Router>
      </div>
      
    )
  }
}

export default MainContainer;
