import ToastContainer from '@components/Toast';
import FeedPage from '@pages/FeedPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/post/:id' element={<FeedPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
