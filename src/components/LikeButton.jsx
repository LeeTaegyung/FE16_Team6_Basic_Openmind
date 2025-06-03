import styled from 'styled-components';

import ThumbsUp from '../assets/ThumbsUp.svg?react';
import { theme } from '../styles/theme';

function LikeButton({ isPressed, likeCount }) {
  return (
    <LikeButtonWrapper isPressed={isPressed}>
      <ThumbsUp
        fill={isPressed ? theme.color.blue50 : theme.color.gray40}
        height='16'
      />
      <span>좋아요</span>
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
  color: ${(props) =>
    props.isPressed ? props.theme.color.blue50 : props.theme.color.gray40};
`;

const LikeCount = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.blue50};
`;
