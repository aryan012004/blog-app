import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import './App.css';
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';
import Header from './Component/Header';
function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Header/>
          <Routes>
                  <Route path="/" element={<SignUp/>} />
                  {/* <Route path="/signin" element={<SignIn />} />          */}
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
