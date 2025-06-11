import { useState } from 'react';

import { ButtonBrown40 } from '@components/Button';
import styled from 'styled-components';

const AnswerForm = ({ content = '', isEditMode = false, onClick }) => {
  const [answerText, setAnswerText] = useState(content);
  const buttonText = isEditMode ? '수정 완료' : '답변 완료';

  const handleChangeText = (e) => setAnswerText(e.target.value);

  const handleClickSubmit = () => {
    onClick(answerText);
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
        onClick={handleClickSubmit}
        disabled={!answerText.length}
      >
        {buttonText}
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
