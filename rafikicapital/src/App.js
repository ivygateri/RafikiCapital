import React from 'react'
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

function App() {
  return(
         
    

     <Router> 
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
        

      </Routes>
      </AuthProvider>
      </Router>
      
      
      
      

      
   
  )
}

export default App;
