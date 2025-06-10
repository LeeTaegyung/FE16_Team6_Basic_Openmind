import Modal from '@components/Modal';
import ToastContainer from '@components/Toast';
import AnswerEditPage from '@pages/FeedPage/AnswerEditPage';
import AnswerLayout from '@pages/FeedPage/AnswerLayout';
import AnswerViewPage from '@pages/FeedPage/AnswerViewPage';
import HomePage from '@pages/HomePage/HomePage';
import UserList from '@pages/ListPage/UserList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/post/' element={<AnswerLayout />}>
          <Route path=':id' element={<AnswerViewPage />} />
          <Route path=':id/answer' element={<AnswerEditPage />} />
        </Route>
        <Route path='/' element={<HomePage />} />
        <Route path='/modal' element={<Modal />} />
        <Route path='/list' element={<UserList />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
