import QuestionCountIcon from '@assets/icons/QuestionCountIcon.svg?react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function UserProfile({ user }) {
  const profileNavigator = useNavigate();

  function handleMove() {
    const loggedInData = JSON.parse(localStorage.getItem('userData'));

    if (loggedInData?.id === user.id) {
      profileNavigator(`/post/${user.id}/answer`);
    } else {
      profileNavigator(`/post/${user.id}`);
    }
  }

  return (
    <ProfileCard onClick={handleMove}>
      <img className='user-img' src={user.imageSource} alt='유저 대표 이미지' />
      <h2>{user.name}</h2>
      <div>
        <span>
          <QuestionCountIcon aria-label='받은 질문 아이콘' />
          받은 질문
        </span>
        <span>{user.questionCount}</span>
      </div>
    </ProfileCard>
  );
}

export default UserProfile;

export const ProfileCard = styled.div`
  background: ${({ theme }) => theme.color.gray10};
  border: 1px solid ${({ theme }) => theme.color.gray40};
  border-radius: 16px;
  padding: 16px;
  cursor: pointer;

  .user-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  h2 {
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 12px;
    font-size: ${({ theme }) => theme.fontSize.fz18};
    line-height: ${({ theme }) => theme.lineHeight.lh24};
    font-weight: 400;
  }

  div {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontSize.fz14};
    line-height: ${({ theme }) => theme.lineHeight.lh18};
    color: ${({ theme }) => theme.color.gray40};

    span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 20px;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.fz20};
      line-height: ${({ theme }) => theme.lineHeight.lh25};
    }

    .user-img {
      width: 60px;
      height: 60px;
    }

    div {
      margin-top: 28px;
      font-size: ${({ theme }) => theme.fontSize.fz16};
      line-height: ${({ theme }) => theme.lineHeight.lh22};
    }
  }
`;
