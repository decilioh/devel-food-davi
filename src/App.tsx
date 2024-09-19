import Router from './routes/Route';
import { GlobalStyles } from './assets/styles/global';
import { ModalProvider } from './context/modalContext';
import { UserProvider } from './context/userContext';
import { AuthProvider } from './context/authContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SignupProvider } from './context/signupContext';


export default function App() {
  return (
    <HelmetProvider>

      <UserProvider>
        <AuthProvider>
          <ModalProvider>
            <>
              <SignupProvider>
                <GlobalStyles />
                <Helmet titleTemplate='%s | DevelFood' />
                <Router />
              </SignupProvider>
            </>
          </ModalProvider>
        </AuthProvider>
      </UserProvider>

    </HelmetProvider>

  );
}
