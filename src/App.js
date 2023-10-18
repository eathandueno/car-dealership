import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Inventory from './pages/Inventory/Inventory.jsx';
import MediaGallery from './pages/MediaGallery/MediaGallery.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Error from './pages/Error/Error.jsx';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/gallery" element={<MediaGallery/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route element={<Error/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
