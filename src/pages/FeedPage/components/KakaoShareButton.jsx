import { useEffect } from 'react';

import IconKakaoShare from '@assets/icons/IconKakaoShare.svg?react';

const { Kakao } = window;

function KakaoShareButton({ name, subjectId }) {
  const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_APP_KEY;

  const handleKakaoShare = () => {
    Kakao.Share.sendCustom({
      templateId: 121287, // 카카오톡 개발센터에서 설정한 template 설정
      templateArgs: {
        userName: name,
        id: subjectId,
      },
    });
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(KAKAO_APP_KEY);
  }, []);

  return (
    <button onClick={handleKakaoShare}>
      <IconKakaoShare
        width='40'
        height='40'
        aria-label='카카오톡 공유 아이콘'
      />
    </button>
  );
}

export default KakaoShareButton;
