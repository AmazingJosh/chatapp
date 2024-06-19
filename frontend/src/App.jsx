import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home/Home"
import {Toaster} from "react-hot-toast"
import { useAuthContext } from './context/AuthContext'

export default function App() {
  const {authUser} = useAuthContext()
  return (
    
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <SignUp/> */}
      <Routes>
        <Route path="/" element={authUser?<Home/>: <Navigate to="/login"/>}/>
        <Route path="/login" element={authUser? <Navigate to="/"/> : <Login/>}/>
        <Route path="/Signup" element={authUser? <Navigate to="/"/> : <SignUp/>}/>
      </Routes>
      <Toaster/>
     
    
    </div>
  )
}