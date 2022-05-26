import { Route, Routes } from 'react-router-dom'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import 'swiper/swiper.min.css'
import './App.scss'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Detail from './pages/detail/Detail'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/:category/search/:keyword" element={<Catalog />}></Route>
        <Route path="/:category/:id" element={<Detail />}></Route>
        <Route path="/:category/" element={<Catalog />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
