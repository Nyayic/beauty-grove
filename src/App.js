import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/About'
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom'
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Dropdown from './components/Dropdown';

function App() {
    const [isOpen, setIsOpen]=useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    useEffect(()=>{
        const hideMenu = () =>{
            if(window.innerWidth> 768 && isOpen) {
                setIsOpen(false)
                console.log('i resized')
            }

        }
        window.addEventListener('resize', hideMenu)
        return()=>{
            window.removeEventListener('resize', hideMenu)
        }
    })

    return ( 
        <>
           <Navbar toggle={toggle} />
           <Dropdown isOpen= {isOpen} toggle={toggle} />
           <Switch>
               <Route path='/' exact component={Home}/>
               <Route path='/about' component={About} />
               <Route path='/shop' component={Shop} />
               <Route path='/contact' component={Contact} />
           </Switch>
          
           <Footer />
        </>
    );
}

export default App;