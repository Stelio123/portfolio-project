// AppRouter
// Development Components
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import IndividualWorkPage from "../pages/IndividualWorkPage";
import Contact from "../pages/Contact";
import Footer from '../components/Footer';
import {AnimatePresence} from 'framer-motion';
import {useLocation} from 'react-router-dom';






function AppRouter() {
  const location = useLocation();
  return (
    <div className="wrapper">
      <Header/>
      <AnimatePresence exitBeforeEnter initial={false} >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path ="work" element={<Work/>}/>
          <Route path="/:slug" element={<IndividualWorkPage/>}/>
          <Route path ="contact" element={<Contact/>}/>
        </Routes>
        </AnimatePresence>
      <Footer/>
    </div>
 
  );
}

export default AppRouter;
