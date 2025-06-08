import ModalPage from '@components/ModalPage';
import ToastContainer from '@components/Toast';
import FeedPage from '@pages/FeedPage/FeedPage';
import HomePage from '@pages/HomePage/HomePage';
import UserList from '@pages/list/UserList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/post/:id' element={<FeedPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/modal' element={<ModalPage />} />
        <Route path='/list' element={<UserList />} />
      </Routes>
      <ModalPage />
      <ToastContainer />
    </>
  );
}

export default App;
