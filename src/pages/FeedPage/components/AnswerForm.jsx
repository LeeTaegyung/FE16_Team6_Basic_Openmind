import { useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import { ButtonBrown40 } from '../../../components/Button';

const AnswerForm = ({ questionId }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [answerText, setAnswerText] = useState('');

  const handleChangeText = (e) => setAnswerText(e.target.value);

  const handleClickAnswer = async () => {
    const response = await axios.post(
      `${BASE_URL}/questions/${questionId}/answers/`,
      {
        content: answerText,
        isRejected: false,
      },
    );

    console.log(response);
  };

  return (
    <>
      <StyledAnswerFormTextArea
        name=''
        id=''
        placeholder='답변을 입력해주세요'
        value={answerText}
        onChange={handleChangeText}
      />
      <StyledAnswerFormButton
        onClick={handleClickAnswer}
        disabled={!answerText.length}
      >
        답변 완료
      </StyledAnswerFormButton>
    </>
  );
};

export default AnswerForm;

const StyledAnswerFormTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 186px;
  border: 1px solid ${({ theme }) => theme.color.gray20};
  padding: 16px;
  color: ${({ theme }) => theme.color.gray60};
  background: ${({ theme }) => theme.color.gray20};
  border-radius: 8px;
  outline: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray40};
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.brown40};
  }
`;

const StyledAnswerFormButton = styled(ButtonBrown40)`
  width: 100%;
  margin-top: 8px;
`;
