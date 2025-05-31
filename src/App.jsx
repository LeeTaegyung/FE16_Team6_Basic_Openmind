import { Routes, Route } from 'react-router-dom';

import FeedPage from './pages/FeedPage/FeedPage';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/post/:id' element={<FeedPage />} />
      </Routes>
    </>
  );
}

export default App;
