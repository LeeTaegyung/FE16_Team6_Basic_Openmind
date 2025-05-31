import { Routes, Route } from 'react-router-dom';
import './App.css';
import FeedPage from './pages/FeedPage';

function App() {
  return (
    <>
      <Routes>
        <Route to="/post/:id" element={<FeedPage />} />
      </Routes>
    </>
  );
}

export default App;
