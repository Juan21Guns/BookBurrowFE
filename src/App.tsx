import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Preview, Layout, Home, NotFound, BookRecs } from './pages'
import SearchResults from './pages/BookSearch/SearchResults.tsx'
import './styles/global.css'
import { Provider, useDispatch, useSelector } from "react-redux"
import store from "./redux/store"
import Authentication from "./pages/AWS/Authentication.tsx"
import '@aws-amplify/ui-react/styles.css';
import Confirm from "./pages/AWS/Confirm.tsx"
import { IRootState } from "./redux/IRootState.ts"
import { useEffect } from "react"
import React from "react"

function App() {

  const userInfo = useSelector((state: IRootState) => state.user);

  const [user, setUser] = React.useState(userInfo.username);
  const [comp, setComp] = React.useState(<Authentication />);
  
  useEffect(() => {
    console.log(userInfo.username == 'guest');
    setUser(userInfo.username);
    loggedIn();
  }, [userInfo])

  const loggedIn = () => {
    if (userInfo.username == 'guest') {
      setComp(<Preview />);
    } else {
      setComp(<Layout />);
    }
  }

  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={comp}>
              <Route index element={<Preview />} />
              <Route path="home" element={<Home />} />
              <Route path="bookrecs" element={<BookRecs />} />
              <Route path="bookresults" element={<SearchResults />} />
            </Route>
            <Route path="/signup" element={<Authentication />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="*"element={<NotFound />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App;

