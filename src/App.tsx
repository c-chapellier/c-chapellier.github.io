import React from 'react'
import './App.scss'
import Home from './components/home/Home'
// import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Developer from './components/developer/Developer'

const App: React.FC<any> = () => {
  return (
   <>
    <Header />
    <Home />
    <Developer />
    {/* <Contact /> */}
    <Footer />
   </>
  )
}

export default App
