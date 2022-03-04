// AppRouter
// Development Components
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Footer from '../components/Footer';





function AppRouter() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header/>
      <NavBar/>
      <main>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default AppRouter;
