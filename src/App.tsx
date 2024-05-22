import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Preview, Layout, Home, NotFound, BookRecs } from './pages'
import SearchResults from './pages/BookSearch/SearchResults.tsx'
import './styles/global.css'
import { Provider } from "react-redux"
import store from "./redux/store"
import Authentication from "./pages/AWS/Authentication.tsx"
import '@aws-amplify/ui-react/styles.css';
import Confirm from "./pages/AWS/Confirm.tsx"

function App() {

  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Preview />} />
              <Route path="home" element={<Home />} />
              <Route path="signup" element={<Authentication />} />
              <Route path="confirm" element={<Confirm />} />
              <Route path="bookrecs" element={<BookRecs />} />
              <Route path="/bookresults" element={<SearchResults />} />
            </Route>
            <Route path="*"element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </Provider>
  )
}

export default App;

