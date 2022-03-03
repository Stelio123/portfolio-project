// AppRouter
// Development Components
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';





function AppRouter() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header/>
      <NavBar/>
      <main>

      </main>
      <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default AppRouter;
