import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Container} from 'react-bootstrap';
import Sidebar from './Components/Sidebar';
import Navbartop from './Components/Navbartop';
import Dashboard from './Routes/Dashboard';
import Wallet from './Routes/Wallet';
function App() {
  return (

    <div>
      <BrowserRouter>
          <Container fluid>
            <Sidebar/>
              <Navbartop/>
                  <Container className='content'>
                        {/* Routes */}
                        <Routes>
                              <Route path='/' element={<Dashboard/>}/> 
                              <Route path='/wallet' element={<Wallet/>}/>  
                        </Routes>
                  </Container>
                      
                  
          </Container>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
