import IconKakaoShare from '../../../assets/icons/IconKakaoShare.svg';

function KakaoShareButton() {
  return (
    <button>
      <img
        src={IconKakaoShare}
        alt='카카오톡 공유 아이콘'
        width='40'
        height='40'
      />
    </button>
  );
}

export default KakaoShareButton;
