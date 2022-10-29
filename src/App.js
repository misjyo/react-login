import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import Addemp from './components/emp/Addemp';
import Viewemp from './components/emp/Viewemp';

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
      <Route path='/addemp' element={<Addemp/>} />
      <Route path='/viewemp' element={<Viewemp />} />

    </Routes>
  </>
  );
}

export default App;
