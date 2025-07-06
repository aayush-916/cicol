import { Route, Routes } from 'react-router-dom'; // ✅ Remove BrowserRouter
import AboutUsPage from './AboutUsPage';
import InquiryFormSection from './componets/InquiryFormSection';
import ProductsSection from './componets/ProductsSection';
import Home from './Home';


function App() {
  return (
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/AboutUs" exact Component={AboutUsPage} />
      <Route path="/products" exact Component={ProductsSection} />
      <Route path="/Contact" exact Component={InquiryFormSection} />
    </Routes>
  );
}

export default App;
