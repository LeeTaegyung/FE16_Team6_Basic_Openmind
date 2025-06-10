import AnswerProvider from '@context/PostContext';
import UserProvider from '@context/UserContext';
import { Outlet } from 'react-router-dom';

import PostHeader from './components/PostHeader';

function PostLayout() {
  return (
    <>
      <UserProvider>
        <AnswerProvider>
          <PostHeader />
          <Outlet />
        </AnswerProvider>
      </UserProvider>
    </>
  );
}

export default PostLayout;
