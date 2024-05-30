import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Preview, Layout, Home, NotFound, BookRecs } from './pages'
import SearchResults from './pages/BookSearch/SearchResults.tsx'
import './styles/global.css'
import { useSelector } from "react-redux"
import SignUp from "./pages/AWS/SignUp.tsx"
import '@aws-amplify/ui-react/styles.css';
import Confirm from "./pages/AWS/Confirm.tsx"
import { IRootState } from "./redux/IRootState.ts"
import { useEffect } from "react"
import React from "react"
import Authentication from "./pages/AWS/Authentication.tsx"

function App() {

  const userInfo = useSelector((state: IRootState) => state.user);

  const [user, setUser] = React.useState(userInfo.username);
  const [comp, setComp] = React.useState(<SignUp />);
  
  useEffect(() => {
    const date = new Date();
    const unixDate = Math.floor(date.getTime()) / 1000;

    setUser(userInfo.username);
    if (userInfo.confirmed == "true" && userInfo.exp - unixDate > 0) {
      setComp(<Layout />);
    } else {
      setComp(<Preview />);
    }
  }, [userInfo])

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

