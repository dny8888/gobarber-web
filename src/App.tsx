import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './page/SignIn/index';
// import SignUp from './page/SignUp/index';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
    <>
        <GlobalStyle />
        <AuthProvider>
            <SignIn />
        </AuthProvider>
    </>
);

export default App;
