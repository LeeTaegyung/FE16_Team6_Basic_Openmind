import FeedPage from '@pages/FeedPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/post/:id' element={<FeedPage />} />
      </Routes>
    </>
  );
}

export default App;