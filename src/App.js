import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <div>
      
    <AuthContextProvider>
    <Routes >
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/register" element={<RegisterPage/>} />
    </Routes >

    </AuthContextProvider>


    </div>
    
  );
}

export default App