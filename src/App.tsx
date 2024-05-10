import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Preview, Layout, Home, NotFound, BookRecs, SearchResults } from './pages'
import { Signup } from './pages/AWS'
import './styles/global.css'
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Preview />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Signup />} />
            <Route path="bookrecs" element={<BookRecs />} />
            <Route path="/bookresults" element={<SearchResults />} />
          </Route>
          <Route path="*"element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
