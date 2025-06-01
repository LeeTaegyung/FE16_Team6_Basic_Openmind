import styled from 'styled-components';

import ThumbsUp from '../assets/ThumbsUp.svg?react';

function LikeButton({ isPressed, likeCount }) {
  return (
    <LikeButtonWrapper isPressed={isPressed}>
      <ThumbsUp
        fill={isPressed ? 'var(--blue-50)' : 'var(--gray-40)'}
        height='16'
      />
      좋아요
      {likeCount && <LikeCount>{likeCount}</LikeCount>}
    </LikeButtonWrapper>
  );
}

export default LikeButton;

const LikeButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isPressed',
})`
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isPressed ? 'var(--blue-50)' : 'var(--gray-40)')};
`;

const LikeCount = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--blue-50);
`;
