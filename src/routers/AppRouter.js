// AppRouter
// Development Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import IndividualWorkPage from "../pages/IndividualWorkPage";
import Contact from "../pages/Contact";
import Footer from '../components/Footer';






function AppRouter() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header/>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path ="work" element={<Work/>}/>
          <Route path="/:slug" element={<IndividualWorkPage/>}/>
          <Route path ="contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default AppRouter;
