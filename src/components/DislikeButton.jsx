import styled from 'styled-components';

import ThumbsDown from '../assets/ThumbsDown.svg?react';

function DislikeButton({ isPressed }) {
  return (
    <DislikeButtonWrapper isPressed={isPressed}>
      <ThumbsDown
        fill={isPressed ? 'var(--gray-60)' : 'var(--gray-40)'}
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
  color: ${(props) => (props.isPressed ? 'var(--gray-60)' : 'var(--gray-40)')};
`;
