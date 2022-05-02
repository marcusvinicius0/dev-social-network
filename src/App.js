import firebase from './services/firebaseConnection';

import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import MyRoutes from './routes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
