import styled from 'styled-components';
import UserImg from '@assets/images/ProfileImg.svg';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { ButtonBrown40 } from '@components/Button';

const ModalWrapper = styled.div`
  padding: 24px;
  position: fixed;
  top: 50px;
  left: 50%;
  width: 90%;
  height: auto;
  transform: translateX(-50%);
  border-radius: 24px;
  background: ${({ theme }) => theme.color.gray10};
  box-shadow: 0 8px 24px rgba(48, 48, 48, 0.62);

  h2 {
    font-size: 24px;
    margin-bottom: 40px;
    padding-left: 36px;
    background-image: url(src/assets/images/icons/ModalTitleIcon.png);
    background-size: 28px;
    background-repeat: no-repeat;
    background-position: left;
  }

  @media (min-width: 768px) {
    top: 172px;
    width: 612px;
    height: 454px;
    padding: 40px;
  }
`;

const ButtonClose = styled.button`
  position: fixed;
  right: 24px;
  top: 24px;
  width: 28px;
  height: 28px;
  background: url(src/assets/images/icons/ModalClose.png);
  background-size: 100%;

  @media (min-width: 768px) {
    right: 40px;
    top: 40px;
  }
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  img {
    display: block;
    margin: 0 4px;
  }
`;

const StyleTextarea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 16px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  overflow: scroll;
  background: ${({ theme }) => theme.color.gray20};

  @media (min-width: 768px) {
    width: 532px;
    height: 180px;
    overflow: scroll;
  }
`;

const ModalSendButton = styled(ButtonBrown40)`
  display: block;
  width: 100%;
  margin-top: 8px;
  text-align: center;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.56);
`;

function Modal({ onClose }) {
  return (
    <ThemeProvider theme={theme}>
      <ModalBackground>
        <ModalWrapper>
          <h2>질문을 작성하세요</h2>
          <ButtonClose onClick={onClose}></ButtonClose>
          <UserName>
            To.
            <img src={UserImg} alt='회원 이미지' />
            <span>아초는 고양이</span>
          </UserName>
          <StyleTextarea
            id='question'
            placeholder='질문을 입력해주세요'
          ></StyleTextarea>
          <ModalSendButton disabled>질문 보내기</ModalSendButton>
        </ModalWrapper>
      </ModalBackground>
    </ThemeProvider>
  );
}

export default Modal;
