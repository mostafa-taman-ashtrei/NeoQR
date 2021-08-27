import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import GenerateQr from './pages/GenerateQr';
import ScanQr from './pages/ScanQr';
import Home from './pages/Home';

const App: React.FC = () => (
    <ChakraProvider>
        <Router>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/generate" component={GenerateQr} />
            <Route path="/scan" component={ScanQr} />
        </Router>
    </ChakraProvider>

);

export default App;
