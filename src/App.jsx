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
        <Route path='/' element={<HomePage />} />
        <Route path='/list' element={<UserList />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
