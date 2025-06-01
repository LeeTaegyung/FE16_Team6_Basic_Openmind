import { useEffect } from 'react';

import { createPortal } from 'react-dom';
import styled from 'styled-components';

function Toast({ message, delay, onClose }) {
  useEffect(() => {
    const TIMER = setTimeout(
      () => {
        onClose(false);
      },
      delay * 1000 + 1000,
    );

    return () => {
      clearTimeout(TIMER);
    };
  }, [delay, onClose]);

  const content = <StyledToast>{message}</StyledToast>;
  return createPortal(content, document.body);
}

export default Toast;

const StyledToast = styled.div`
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 20px;
  font-size: var(--font-size-14);
  font-weight: 500;
  color: #fff;
  background-color: var(--gray-60);
  border-radius: 8px;
  box-shadow: var(--shadow-2);
  animation:
    animationTostShow 0.3s ease forwards,
    animationTostHide 0.3s ease forwards 3s;

  @keyframes animationTostShow {
    0% {
      transform: translate(-50%, 20px);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }

  @keyframes animationTostHide {
    0% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -20px);
      opacity: 0;
    }
  }
`;
