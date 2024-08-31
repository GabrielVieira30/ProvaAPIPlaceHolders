import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
          
   <Header />

    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/about' element ={<About/>} />
    </Routes>

    <About/>

    <Footer/>
    </>
  )
}

export default App