import ToastContainer from '@components/Toast';
import FeedPage from '@pages/FeedPage';
import HomePage from '@pages/HomePage/HomePage';
import ModalPage from '@components/ModalPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/post/:id' element={<FeedPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/modal' element={<ModalPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
