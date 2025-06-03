import styled from 'styled-components';

import ThumbsDown from '../assets/ThumbsDown.svg?react';
import { theme } from '../styles/theme';

function DislikeButton({ isPressed }) {
  return (
    <DislikeButtonWrapper isPressed={isPressed}>
      <ThumbsDown
        fill={isPressed ? theme.color.gray60 : theme.color.gray40}
        height='16'
      />
      싫어요
    </DislikeButtonWrapper>
  );
}

export default DislikeButton;

const DislikeButtonWrapper = styled.button.withConfig({
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
    props.isPressed ? props.theme.color.gray60 : props.theme.color.gray40};
`;
