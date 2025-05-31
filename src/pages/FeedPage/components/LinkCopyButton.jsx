import IconCopyLink from '../assets/icons/IconCopyLink.svg';

function LinkCopyButton() {
  return (
    <button>
      <img src={IconCopyLink} alt='링크 복사 아이콘' width='40' height='40' />
    </button>
  );
}

export default LinkCopyButton;
