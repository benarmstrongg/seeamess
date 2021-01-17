import React, { FC } from 'react';
import { SeeamessContextProvider } from './context/SeeamesContextProvider';
import { AppContainer } from './components/layout/AppContainer';

const App: FC = () => (
    <div className="App">
        <SeeamessContextProvider>
            <AppContainer />
        </SeeamessContextProvider>
    </div>
);


export default App;
