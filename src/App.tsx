import Router from './routes/Route';
import { GlobalStyles } from './assets/styles/global';
import { ModalProvider } from './context/modalContext';
import { UserProvider } from './context/userContext';
import { AuthProvider } from './context/authContext';


export default function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <ModalProvider>
          <>
            <GlobalStyles />
            <Router />
          </>
        </ModalProvider>
      </AuthProvider>
    </UserProvider>

  );
}
