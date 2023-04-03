import React from 'react'
import './App.scss'
import Home from './pages/home/Home'
// import Contact from './pages/contact/Contact'
import ContactDeveloperTransition from './components/contactDeveloperTransition/ContactDeveloperTransition'
import Developer from './pages/developer/Developer'
import Engineer from './pages/engineer/Engineer'
import Footer from './pages/footer/Footer'
import Header from './pages/header/Header'

const App: React.FC<any> = () => {
  return (
   <>
    <Header />
    <Home />
    <ContactDeveloperTransition />
    <Engineer />
    <Developer />
    <Footer />
   </>
  )
}

export default App
