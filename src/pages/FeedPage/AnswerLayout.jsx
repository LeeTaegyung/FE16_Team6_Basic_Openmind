import AnswerProvider from '@context/AnswerContext';
import UserProvider from '@context/UserContext';
import { Outlet, useParams } from 'react-router-dom';

import PostHeader from './components/PostHeader';

function AnswerLayout() {
  const { id } = useParams();

  return (
    <>
      <AnswerProvider id={id}>
        <UserProvider id={id}>
          <PostHeader />
          <Outlet />
        </UserProvider>
      </AnswerProvider>
    </>
  );
}

export default AnswerLayout;
