import { useState } from 'react';

import { ButtonBrown40 } from '@components/Button';
import { useGetQuestions } from '@context/PostContext';
import axios from 'axios';
import styled from 'styled-components';

const AnswerForm = ({ questionId, answerId, content = '' }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [answerText, setAnswerText] = useState(content);
  const { setQuestions } = useGetQuestions();

  const handleChangeText = (e) => setAnswerText(e.target.value);

  const handleClickAnswer = async () => {
    if (content === '') {
      const response = await axios.post(
        `${BASE_URL}/questions/${questionId}/answers/`,
        {
          content: answerText,
          isRejected: false,
        },
      );

      setQuestions((prev) => {
        const filteredItem = prev.filter(
          (el) => el.id !== response.data.questionId,
        );
        const findItem = prev.find((el) => el.id === response.data.questionId);
        return [{ ...findItem, answer: response.data }, ...filteredItem];
      });
    } else {
      const response = await axios.put(`${BASE_URL}/answers/${answerId}/`, {
        content: answerText,
        isRejected: false,
      });

      setQuestions((prev) => {
        const mappedArr = prev.map((el) => {
          if (el.id === response.data.questionId) {
            return { ...el, answer: response.data };
          }

          return el;
        });
        return mappedArr;
      });
    }
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
