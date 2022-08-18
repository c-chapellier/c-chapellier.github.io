import React from 'react'
import './App.scss'
import Home from './pages/home/Home'
// import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'
import Header from './pages/header/Header'
import Engineer from './pages/engineer/Engineer'
import ContactDeveloperTransition from './components/contactDeveloperTransition/ContactDeveloperTransition'
import Developer from './pages/developer/Developer'

const App: React.FC<any> = () => {
  return (
   <>
    <Header />
    <Home />
    <ContactDeveloperTransition />
    <Engineer />
    <Developer />
    {/* <Contact /> */}
    <Footer />
   </>
  )
}

export default App
