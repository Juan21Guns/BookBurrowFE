import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Preview, Layout, Home } from './pages'
import { Signup } from './pages/AWS'
import './styles/global.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Preview />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Signup />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
