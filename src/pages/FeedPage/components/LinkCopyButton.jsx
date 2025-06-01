import { useState } from 'react';

import IconCopyLink from '@assets/icons/IconCopyLink.svg';
import Toast from '@components/Toast';

function LinkCopyButton() {
  const [isToast, setIsToast] = useState(false);

  const handleToast = () => setIsToast(true);

  return (
    <>
      <button onClick={handleToast}>
        <img src={IconCopyLink} alt='링크 복사 아이콘' width='40' height='40' />
      </button>
      {isToast && (
        <Toast message='URL이 복사되었습니다' delay={3} onClose={setIsToast} />
      )}
    </>
  );
}

export default LinkCopyButton;
