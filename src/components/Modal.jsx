import styled from 'styled-components';
import axios from 'axios';
import UserImg from '@assets/images/ProfileImg.svg';
import ModalTitleIcon from '@assets/images/icons/ModalTitleIcon.svg?react';
import ModalClose from '@assets/images/icons/ModalClose.svg?react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ButtonBrown40 } from '@components/Button';

function Modal({ onClose }) {
  const [text, setText] = useState('');
  const { id: subjectId } = useParams();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/subjects/${subjectId}/questions/`,
        {
          content: text,
        },
      );
      console.log('등록 성공:', response.data);
      onClose();
    } catch (err) {
      console.error('등록 실패:', err.response?.data || err);
    }
  };

  const handleChange = (e) => setText(e.target.value);

  return (
    <ModalBackground onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <h2>
          <ModalTitleIcon />
          질문을 작성하세요
        </h2>
        <ButtonClose
          onClick={() => {
            console.log('배경 클릭으로 닫기!');
            onClose();
          }}
        >
          <ModalClose />
        </ButtonClose>
        <UserName>
          To.
          <img src={UserImg} alt='회원 이미지' width={25} height={25} />
          <span>아초는 고양이</span>
        </UserName>
        <StyleTextarea
          id='question'
          value={text}
          placeholder='질문을 입력해주세요'
          onChange={handleChange}
        />
        <ModalSendButton onClick={handleSubmit} disabled={text.trim() === ''}>
          질문 보내기
        </ModalSendButton>
      </ModalWrapper>
    </ModalBackground>
  );
}
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
  box-shadow: ${({ theme }) => theme.boxShadow.shadow3};
  @media (min-width: 768px) {
    box-shadow: ${({ theme }) => theme.boxShadow.shadow2};
  }
  @media (min-width: 1024px) {
    box-shadow: ${({ theme }) => theme.boxShadow.shadow3};
  }

  h2 {
    display: flex;
    font-size: 24px;
    margin-bottom: 40px;
    background-position: left;

    svg {
      margin-right: 10px;
    }
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
    border-radius: 50%;
  }
`;

const StyleTextarea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 16px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray10};
  outline: none;
  resize: none;
  background: ${({ theme }) => theme.color.gray20};

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.brown40};
  }
  @media (min-width: 768px) {
    width: 532px;
    height: 180px;
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
export default Modal;
