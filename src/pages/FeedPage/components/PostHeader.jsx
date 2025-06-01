import Logo from '@components/Logo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FacebookShareButton from './FacebookShareButton';
import KakaoShareButton from './KakaoShareButton';
import LinkCopyButton from './LinkCopyButton';
import PostHeaderBg from '../../../assets/images/PostHeaderBg.jpg';

function PostHeader() {
  return (
    <PostHeaderStyle>
      <h1 className='logo'>
        <Link to='/'>
          <Logo />
        </Link>
      </h1>
      <div className='user-info'>
        <UserThumbnail>
          <img
            src='https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8'
            alt={`유저이름의 프로필 이미지`}
          />
        </UserThumbnail>
        <h2 className='user-name'>아초는고양이가뭔데</h2>
      </div>
      <ul className='post-utils'>
        <li>
          <LinkCopyButton />
        </li>
        <li>
          <KakaoShareButton />
        </li>
        <li>
          <FacebookShareButton />
        </li>
      </ul>
    </PostHeaderStyle>
  );
}

export default PostHeader;

const PostHeaderStyle = styled.div`
  padding-top: 40px;
  background: url(${PostHeaderBg}) top center no-repeat;
  background-size: auto 177px;

  @media (min-width: 768px) {
    padding-top: 50px;
    background-size: auto 234px;
  }

  .logo {
    width: 124px;
    margin: 0 auto;

    img {
      width: auto;
      height: auto;
    }

    @media (min-width: 768px) {
      width: 170px;
    }
  }

  .user-info {
    margin-top: 12px;
    .user-name {
      margin-top: 12px;
      font-size: var(--font-size-24);
      font-weight: 400;
      color: var(--gray-60);
      text-align: center;
      line-height: var(--font-lh-30);

      @media (min-width: 768px) {
        font-size: var(--font-size-32);
        line-height: var(--font-lh-40);
      }
    }
  }

  .post-utils {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    gap: 12px;

    button {
      border: none;
      background: none;
      border-radius: 0;
    }
  }
`;

const UserThumbnail = styled.div`
  width: 104px;
  height: 104px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 136px;
    height: 136px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
