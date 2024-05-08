import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Preview, Layout, Home, NotFound, BookRecs, SearchBooks } from './pages'
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
            <Route path="bookrecs" element={<BookRecs />} />
            <Route path="/bookresults" element={<SearchBooks />} />
          </Route>
          <Route path="*"element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
