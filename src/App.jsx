import { Routes, Route } from 'react-router-dom';

import FeedPage from './pages/FeedPage';
import { GlobalStyle } from './styles/GlobalStyle';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle>
        <Routes>
          <Route path='/post/:id' element={<FeedPage />} />
        </Routes>
      </GlobalStyle>
    </>
  );
}

export default App;
