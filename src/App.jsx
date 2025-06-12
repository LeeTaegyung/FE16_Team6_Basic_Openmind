import ToastContainer from '@components/Toast';
import PostEditPage from '@pages/PostPage/PostEditPage';
import PostLayout from '@pages/PostPage/PostLayout';
import PostViewPage from '@pages/PostPage/PostViewPage';
import HomePage from '@pages/HomePage/HomePage';
import UserList from '@pages/ListPage/UserList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/post/' element={<PostLayout />}>
          <Route path=':id' element={<PostViewPage />} />
          <Route path=':id/answer' element={<PostEditPage />} />
        </Route>
        <Route path='/' element={<HomePage />} />
        <Route path='/list' element={<UserList />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
