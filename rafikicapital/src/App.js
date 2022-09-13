import React, { useEffect } from 'react'
import AuthProvider from './contexts/AuthContext';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';
import Contact from "./pages/Contact";
import { Admin } from './pages/Admin';
import { useStateValue } from './contexts/StateProvider';
import { getAllFarmItems } from './utils/Firebasefunction';
import { actionType } from './contexts/reducer';
import Fruit from './pages/Fruit';
import CartContainer from './Components/CartContainer';

const App = () => {

  const [{ farmItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFarmItems().then((data) => {
      dispatch({
        type: actionType.SET_FARM_ITEMS,
        farmItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);


  return(
         
    

     
     <AuthProvider>
      <Routes>
     
        <Route path="/register" element={<Register/>} />
        <Route path="/signin" element={<SignIn/>} />
       <Route path="/dashboard" element={<PrivateRoute> <Dashboard/></PrivateRoute>} />
       <Route path="/update-profile" element={<PrivateRoute> <UpdateProfile/></PrivateRoute>} />
       <Route path="forgot-password" element={<ForgotPassword/>}/>
      
       
       <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/fruits" element={<Fruit/>}/>
        
        

      </Routes>
      </AuthProvider>
     
      
      
      
      

      
   
  )
}

export default App;
