import Cal from './DynamicComponent/Cal';
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import Mainpage from './Pages/Mainpage';

function App() {
  return (
    <div className="App">
      <Loginpage/>
      <Mainpage/>
      <Homepage/>
      <Cal/>
    </div>
  );
}

export default App;
