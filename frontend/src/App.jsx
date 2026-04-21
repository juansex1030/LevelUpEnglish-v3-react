import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProgressProvider } from './context/ProgressContext'

// Layouts & Global Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WelcomeToast from './components/WelcomeToast'

// Pages
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import LevelGrid from './pages/LevelGrid'
import TopicViewer from './pages/TopicViewer'
import Diccionario from './pages/Diccionario'
import ProgressDashboard from './pages/ProgressDashboard'
import Vocabulary from './pages/Vocabulary'
import ArcadePremium from './pages/ArcadePremium'
import Support from './pages/Support'
import Profile from './pages/Profile'

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <div className="min-h-screen bg-transparent flex flex-col">
          <Navbar />
          <WelcomeToast />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/learn" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/niveles/:nivel" element={<LevelGrid />} />
              <Route path="/niveles/:nivel/topic/:topicId" element={<TopicViewer />} />
              <Route path="/diccionario" element={<Diccionario />} />
              <Route path="/vocabulario" element={<Vocabulary />} />
              <Route path="/progress" element={<ProgressDashboard />} />
              <Route path="/arcade" element={<ArcadePremium />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ProgressProvider>
    </AuthProvider>
  )
}

export default App
