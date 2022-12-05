import './App.css';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import { AuthProvider } from './Auth';
import { ProtectedRoutes } from './ProtectedRoutes';
import ErrorPages from './Pages/ErrorPages';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
            <Route path='*' element={<ErrorPages />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;