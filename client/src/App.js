import {BrowserRouter,Routes, Route} from "react-router-dom"
import Clender from './components/Clender.js'
import './App.css';
import NavBar from './components/NavBar';
import Phone from './components/Phone';
import Footer from './components/Footer';
import Address from './components/Address';
import UserDetails from './components/UserDetails';
import PersonalAddress from './components/PersonalAddress';
import Address2	 from './components/Address2';
import Confirm from './components/Confirm';

function App() {
  return (
    <div className="App">
              <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route index element ={<Clender/>}/>
        <Route path='*' element={<Clender/>}/>
        <Route path='/phone' element={<Phone />}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/userdetails' element={<UserDetails/>}/>
        <Route path='/personaladdress' element={<PersonalAddress/>}/>
        <Route path='/address2' element={<Address2/>}/>
        <Route path='/confirm' element={<Confirm/>}/>




      </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
  );
}

export default App;
