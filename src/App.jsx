import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
    <Toaster richColors />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="profile" element={ <Profile /> } />
      </Routes>
    </>
  );
}

export default App;
