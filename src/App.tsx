import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomeEngineerTransition from './components/homeEngineerTransition/HomeEngineerTransition'
import Developer from './pages/developer/Developer'
import Engineer from './pages/engineer/Engineer'
import Footer from './pages/footer/Footer'
import Header from './pages/header/Header'
import Home from './pages/home/Home'
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy'

const MainPage: React.FC = () => (
  <>
    <Header />
    <Home />
    <HomeEngineerTransition />
    <Engineer />
    <Developer />
    <Footer />
  </>
)

const App: React.FC<any> = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/position-history/privacy-policy"
        element={<PrivacyPolicy />}
      />
    </Routes>
  )
}

export default App
