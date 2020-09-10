import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './page/SignIn/index';
// import SignUp from './page/SignUp/index';

const App: React.FC = () => (
    <>
        <GlobalStyle />
        <SignIn />
    </>
);

export default App;
