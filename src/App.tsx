import React from 'react'
import './App.scss'
import HomeEngineerTransition from './components/homeEngineerTransition/HomeEngineerTransition'
import Developer from './pages/developer/Developer'
import Engineer from './pages/engineer/Engineer'
import Footer from './pages/footer/Footer'
import Header from './pages/header/Header'
import Home from './pages/home/Home'

const App: React.FC<any> = () => {
  return (
   <>
    <Header />
    <Home />
    <HomeEngineerTransition />
    <Engineer />
    <Developer />
    <Footer />
   </>
  )
}

export default App
