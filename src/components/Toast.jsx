import { useEffect } from 'react';

import { useToastContext } from '@contexts/ToastContext';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

const TIMEOUT_DELAY = 5000; // ms
const ANIMATION_DURATION = 500; // ms

// Toast 컴포넌트
function Toast({ message, id, delay = TIMEOUT_DELAY }) {
  const { deleteToast } = useToastContext();

  useEffect(() => {
    const TIMER = setTimeout(() => {
      deleteToast(id); // 해당 하는 id의 토스트를 삭제
    }, delay + ANIMATION_DURATION);

    return () => {
      clearTimeout(TIMER);
    };
  }, []);

  return <StyledToast $delay={delay}>{message}</StyledToast>;
}

// ToastContainer 컴포넌트
export default function ToastContainer() {
  const { toasts } = useToastContext();

  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  return createPortal(
    <StyledToastContainer>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          delay={toast.delay}
        />
      ))}
    </StyledToastContainer>,
    toastContainer,
  );
}

const toastShow = keyframes`
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
`;

const toastHide = keyframes`
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-20px);
      opacity: 0;
    }
`;

const StyledToastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  padding-bottom: 60px;
  pointer-events: none;
`;

const StyledToast = styled.div`
  padding: 12px 20px;
  font-size: ${({ theme }) => theme.fontSize.fz14};
  font-weight: 500;
  color: #fff;
  background-color: ${({ theme }) => theme.color.gray60};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow2};
  animation:
    ${toastShow} ${ANIMATION_DURATION}ms ease forwards,
    ${toastHide} ${ANIMATION_DURATION}ms ease forwards
      ${({ $delay }) => $delay || TIMEOUT_DELAY}ms;
`;
