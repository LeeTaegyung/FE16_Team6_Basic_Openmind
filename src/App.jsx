import { Routes, Route } from 'react-router-dom';

import FeedPage from './pages/FeedPage';
import './App.css';

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
