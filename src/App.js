import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/About'
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom'
import Services from './pages/Services';
import Contact from './pages/Contact';
import Register from './pages/Register'
import Dropdown from './components/Dropdown';
import Stylists from './pages/Stylists';

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    };
    useEffect(()=>{
        const hideMenu = () =>{
            if(window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
                console.log('i resized')
            }

        }
        window.addEventListener('resize', hideMenu)
        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    });

    return ( 
        <>
           <Navbar toggle={toggle} />
           <Dropdown isOpen = {isOpen} toggle={toggle} />
           <Switch>
               <Route path='/' exact component={Home}/>
               <Route path='/about' component={About} />
               <Route path='/services' component={Services} />
               <Route path='/stylists' component={Stylists} />
               <Route path='/contact' component={Contact} />
               <Route path='/register' component={Register} />
           </Switch>
          
           <Footer />
        </>
    );
}

export default App;