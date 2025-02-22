
import Explorepage from './Pages/Explorepage';
import HomeNavbar from './RootLayout/HomeNavbar';
import Mainpage from './Pages/Mainpage';
import {Routes,Route} from 'react-router-dom'
import Footer from './RootLayout/Footer';
import BookingForm from './DynamicComponent/BookingForm';


function App() {
  return (
    <div className="App">
      <HomeNavbar />
      
        <Routes>
          <Route path='/booking' element={<BookingForm />}/>
          <Route path='/' element={<Mainpage />}/>
          <Route path='/explore' element={<Explorepage />} />
        </Routes>
     <Footer />

      
      
    </div>
  );
}

export default App;
