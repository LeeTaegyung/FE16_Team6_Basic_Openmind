import { createContext, useContext } from 'react';

import useToasts from '@hooks/useToasts';
const ToastsContext = createContext();

export default function ToastProvider({ children }) {
  const { toasts, createToast, deleteToast } = useToasts(); // toast 상태값 => 커스텀훅
  return (
    <ToastsContext.Provider value={{ toasts, createToast, deleteToast }}>
      {children}
    </ToastsContext.Provider>
  );
}

// context로 내려주는 value를 사용하기 위한 custom hook
export function useToastContext() {
  const context = useContext(ToastsContext);

  if (!context) throw new Error('ToastProvider 안에서 사용해주세요.');

  return context;
}
