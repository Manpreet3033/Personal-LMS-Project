import './App.css';
import { Navigate, Route,Routes } from 'react-router-dom'
import Homepage from './components/pages/Homepage';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import ProtectedRoute from './components/routes/ProtectedRoute';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import VerifyEmail from './components/pages/VerifyEmail';

function App() {

  const token  = useSelector(state => state.auth.token);
  const { signUpData } = useSelector(state => state.auth)

  return (
    <>
    <Routes>
        <Route
          element={<ProtectedRoute token={token}/>}
        >
          <Route path='/' element={<Homepage />} />
        </Route>
      <Route path='/login' element={!token ? <Login /> : <Navigate to={'/'} />} />
      <Route path='/signup' element={!token ? <Signup /> : <Navigate to={'/'} />} />
      <Route path='/verify-email' element={signUpData ? <VerifyEmail /> : <Navigate to={'/signup'} />} />
    </Routes>
    </>
  );
}

export default App;
