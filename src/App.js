import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Footer from './components/Footer';


function App() {

  return (
    
      <Router>
        <Navbar/>
        
        <div className="container">
        
          <Routes>
            <Route path='/' element={ <Home/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/blog_details/:id' element={<BlogDetails/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/project-details/:id' element={<ProjectDetails/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
   
  );
}

export default App;
