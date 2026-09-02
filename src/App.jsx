import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Componets/Layout'
import Home from './Pages/Home/Home'
import Training from './Pages/Gallery/TrainingPlacement/Training'
import Event1 from './Pages/Gallery/EventGallery/Event1'
import Videos from './Pages/Gallery/Videos/Videos'
import SuccessStory from './Pages/Gallery/SuccessStories/SuccessStory'
import Achievements from './Pages/Gallery/Achivements/Achievements'
import Login from './Pages/Login/Login'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Prowess from './Pages/ProwessMethod/Prowess'
import Coaches from './Pages/ProwessCoaches/Coaches'
import ScrollToTop from './Componets/ScrollToTop'
import PerformanceStories from './Pages/PerformanceStories/PerformanceStories'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/prowessexists' element={<About/>}/>
          <Route path='/prowessmethods' element={<Prowess/>}/>
          <Route path='/prowesscoaches' element={<Coaches/>}/>
          <Route path='/performstory' element={<PerformanceStories/>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/event' element={<Event1/>}/>
          <Route path='/videos' element={<Videos/>}/>
          <Route path='/successstory' element={<SuccessStory/>}/>
          <Route path='/achievements' element={<Achievements/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
