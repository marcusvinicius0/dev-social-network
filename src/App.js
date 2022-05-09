import firebase from './services/firebaseConnection';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import MyRoutes from './routes';
import { ToastContainer } from 'react-toastify';

import { Header } from './Components/Header'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header />
        <ToastContainer autoClose={1500} />
        <MyRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
