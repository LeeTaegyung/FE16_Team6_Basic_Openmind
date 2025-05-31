import IconFacebookShare from '../assets/icons/IconFacebookShare.svg';

function FacebookShareButton() {
  return (
    <button>
      <img
        src={IconFacebookShare}
        alt='페이스북 공유 아이콘'
        width='40'
        height='40'
      />
    </button>
  );
}

export default FacebookShareButton;
