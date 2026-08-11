import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PupilMaster from './pupil/layout/PupilMaster'
import PupilHome from './pupil/component/PupilHome'
import FeatureBook from './pupil/component/FeatureBook'
import BestsellingBook from './pupil/component/BestsellingBook'
import PopularBooks from './pupil/component/PopularBooks'
import Download from './pupil/component/Download'
import Login from './pupil/component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PupilMaster />}>
            <Route path="/" element={<PupilHome />} />
            <Route path="/featurebook" element={<FeatureBook />} />
            <Route path="/bestsellingbook " element={<BestsellingBook />} />
            <Route path="/popularbooks" element={<PopularBooks />} />
            <Route path="/download" element={<Download/>} />
            <Route path="/login" element={<Login/>}/>




          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
