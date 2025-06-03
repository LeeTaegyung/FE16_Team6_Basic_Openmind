import { useState, useRef } from 'react';

function useToasts() {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0); // id 생성용

  // 토스트 생성 함수 :: message(필수), delay(옵션)
  const createToast = (toast) => {
    setToasts([
      ...toasts,
      {
        id: idRef.current,
        ...toast,
      },
    ]);
    idRef.current++;
  };

  // 토스트 삭제 함수
  const deleteToast = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  return { toasts, createToast, deleteToast };
}

export default useToasts;
