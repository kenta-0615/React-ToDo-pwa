import React from 'react';
import { AuthProvider } from './providers/AuthProvider';
import './App.css';
import './service/firebase';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
     <Header />
     <Dashboard />{/*TODOを表示するコンポーネント*/}
     <Footer /> {/*フッター*/}
    </AuthProvider>
  );
}

export default App;
