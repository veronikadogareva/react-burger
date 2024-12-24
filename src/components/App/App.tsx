import React from 'react';
import './App.css';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';

function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader />
    </div>
  );
}

export default App;
