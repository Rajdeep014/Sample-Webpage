import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from './componets/Header'
import Home from './componets/Home'
import Footer from './componets/Footer'
import Login from './componets/Login'
import Signup from './componets/Signup'
import Upload from './componets/Upload'
import Videos from './componets/Videos'


function App() {
  return (
    <Router>
      <Header/>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="upload" element={<Upload/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
