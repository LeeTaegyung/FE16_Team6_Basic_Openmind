import FeedPage from '@pages/FeedPage';
import { Routes, Route } from 'react-router-dom';

import { ButtonBrown, ButtonBrown10, ButtonBrown40 } from './components/Button';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Temt></Temt>} />
        <Route path='/post/:id' element={<FeedPage />} />
      </Routes>
    </>
  );
}

export default App;

function Temt() {
  return (
    <>
      <br></br>
      <ButtonBrown disabled $round $shadow>
        123
      </ButtonBrown>
      <br></br>
      <ButtonBrown10 $round $shadow>
        123
      </ButtonBrown10>
      <br></br>
      <ButtonBrown40 $round $shadow>
        123
      </ButtonBrown40>
    </>
  );
}
