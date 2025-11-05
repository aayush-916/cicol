import { Route, Routes } from 'react-router-dom'; // ✅ Remove BrowserRouter
import AboutUsPage from './AboutUsPage';
import InquiryFormSection from './componets/InquiryFormSection';
import ProductsSection from './componets/ProductsSection';
import CicoLivPage from './componets/products/CicoLiv';
import Home from './Home';
import CicoVitPage from './componets/products/CicoVit';
import CicoArthoPage from './componets/products/CicoArtho';


function App() {
  return (
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/AboutUs" exact Component={AboutUsPage} />
      <Route path="/products" exact Component={ProductsSection} />
      <Route path="/Contact" exact Component={InquiryFormSection} />
      <Route path='/CicoLivPage' exact Component={CicoLivPage}/>
      <Route path='/CicoVitPage' exact Component={CicoVitPage}/>
      <Route path='/CicoArthoPage' exact Component={CicoArthoPage}/>
    </Routes>
  );
}

export default App;
