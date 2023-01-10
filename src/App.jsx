import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import Home from './pages/Home'
import DateWidget from './pages/DateWidget'

function App() {
  return (
    <div className="App flex w-full min-h-screen">
      <Nav />
      <main className="flex w-full min-h-screen min-w-screen flex-1 items-center justify-center text-2xl">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/date-widget" element={ <DateWidget/> } />
        </Routes>
      </main>
    </div>
  )
}

export default App
