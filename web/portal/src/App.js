import React from 'react';
import './App.css';
import ClippedDrawer from './components/ClippedDrawer';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <ClippedDrawer />
          <Routers />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
