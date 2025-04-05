import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

import Login from './components/Login'
import { AuthProvider } from './context/AuthContext'
import Signup from './components/Signup'
import StudentForm from './components/StudentForm'

function App() {


  return (
    <AuthProvider>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutSection />} />
        <Route path='/contact' element={<ContactSection />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admission' element={<StudentForm/>}/>
      </Routes>

    </AuthProvider>
  )
}

export default App
