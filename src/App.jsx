import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AuthPage from './components/Auth/AuthPage';
import Skills from './components/Services/Skills';

const App = () => {
  return (
      <main className='overflow-hidden bg-white text-dark'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </main>
  );
};

export default App;