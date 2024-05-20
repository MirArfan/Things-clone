import { Route, Routes } from "react-router-dom"
import TodayPage from "./pages/TodayPage"
import AnytimePage from "./pages/AnytimePage"
import InboxPage from "./pages/InboxPage"
import UpcomingPage from "./pages/UpcommingPage"
import SomedayPage from "./pages/SomedayPage"
import LogbookPage from "./pages/LogbookPage"
import TrashPage from "./pages/TrashPage"


function App() {


  return (
    
    <Routes>
      <Route path="/" element={<InboxPage />} />
      <Route path="/today" element={<TodayPage />} />
      <Route path="/anytime" element={<AnytimePage />} />
      <Route path="/upcoming" element={<UpcomingPage />} />
      <Route path="/someday" element={<SomedayPage />} />
      <Route path="/logbook" element={<LogbookPage />} />
      <Route path="/trash" element={<TrashPage />} />
    </Routes>
  )
}

export default App
