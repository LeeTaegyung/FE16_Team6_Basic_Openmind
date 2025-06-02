import FeedPage from '@pages/FeedPage';
import { Routes, Route } from 'react-router-dom';

import ToastContainer from './components/Toast';

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
