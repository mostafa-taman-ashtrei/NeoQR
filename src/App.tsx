import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from './components/Nav';

const App: React.FC = () => (
    <ChakraProvider>
        <Nav />
    </ChakraProvider>

);

export default App;
