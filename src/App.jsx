import FeedPage from '@pages/FeedPage';
import { GlobalStyle } from '@styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';

import ToastContainer from './components/Toast';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/post/:id' element={<FeedPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
