import { PostProvider } from '@context/PostContext';
import { UserProvider } from '@context/UserContext';
import { Outlet } from 'react-router-dom';

import PostHeader from './components/PostHeader';

function PostLayout() {
  return (
    <>
      <UserProvider>
        <PostProvider>
          <PostHeader />
          <Outlet />
        </PostProvider>
      </UserProvider>
    </>
  );
}

export default PostLayout;
