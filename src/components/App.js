import React, { useState } from 'react';
import AppRouter from './Router';
import { authService } from 'fbase';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(authService.currentUser);
  return (
    <div><AppRouter isLoggedIn={isLoggedIn}/></div>
  );
}

export default App;
