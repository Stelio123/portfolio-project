// AppRouter
// Development Components
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from "../components/NavBar";





function AppRouter() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header/>
      <NavBar/>

    </div>
    </BrowserRouter>
  );
}

export default AppRouter;
