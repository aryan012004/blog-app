import SignUp from './Component/SignUp';
import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Component/SignIn';

import Header from './Component/Header';

import About from './Component/About';
import Contact from './Component/Contact';
import Blog_form from './Component/Blog_from';
import Post from './Component/Post';


function App() {
  return (
    <div className="App">
           <BrowserRouter>
         <Header/>
          <Routes>
                 
                  <Route path="/" element={<SignUp />} />
                  <Route path="/signin" element={<SignIn />} />
               
                <Route path="/blog" element={<Blog_form/>} />
                <Route path="/post" element={<Post/>} />
               
              
                  <Route path="/about" element={<About/>} />
                  <Route path="/contact" element={<Contact/>} />
                  
                
                  
                  
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
