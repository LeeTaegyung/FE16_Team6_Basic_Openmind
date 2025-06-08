import styled, { keyframes } from 'styled-components';

import { ProfileCard } from './UserProfileCard';

export function SkeletonUi() {
  return (
    <SkeletonStyle>
      <div className='user-img' />
      <h2></h2>
      <p></p>
    </SkeletonStyle>
  );
}

export default SkeletonUi;

const SkeletonAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonStyle = styled(ProfileCard)`
  & * {
    background: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.color.gray20} 25%, ${theme.color.gray30} 50%, ${theme.color.gray20} 75%)`};
    background-size: 200% 100%;
    animation: ${SkeletonAnimation} 1.5s infinite linear;
  }

  h2 {
    width: 100px;
    height: 24px;
  }

  div {
    margin-top: 0;
  }

  p {
    margin-top: 30px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
  }
`;
