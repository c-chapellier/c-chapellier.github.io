import React from 'react'
import './App.scss'
import Home from './pages/home/Home'
// import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'
import Header from './pages/header/Header'
import Developer from './pages/developer/Developer'
import ContactDeveloperTransition from './components/contactDeveloperTransition/ContactDeveloperTransition'

const App: React.FC<any> = () => {
  return (
   <>
    <Header />
    <Home />
    <ContactDeveloperTransition />
    <Developer />
    {/* <Contact /> */}
    <Footer />
   </>
  )
}

export default App
