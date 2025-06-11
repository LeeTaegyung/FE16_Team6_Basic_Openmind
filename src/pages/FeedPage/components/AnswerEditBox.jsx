import { useGetQuestions } from '@context/PostContext';
import { useGetUser } from '@context/UserContext';
import { relativeTimeCalculator } from '@functions/relativeTimeCalculator';
import { createAnswer } from '@service/api';
import styled from 'styled-components';

import AnswerForm from './AnswerForm';
import EditableAnswer from './EditableAnswer';

const AnswerEditBox = ({ answer, questionId, isEditMode, setIsEditMode }) => {
  const { user } = useGetUser();
  const { setQuestions } = useGetQuestions();
  const time = answer && relativeTimeCalculator(answer.createdAt);

  // 답변 생성
  const handleCreateAnswer = async (answerText) => {
    const data = await createAnswer(questionId, answerText);

    setQuestions((prev) => {
      return prev.map((el) => {
        return el.id === questionId ? { ...el, answer: data } : el;
      });
    });
  };

  return (
    <AnswerBoxWrapper>
      <AnswerBoxUserImage src={user.imageSource} alt='답변자 프로필 사진' />
      <AnswerBoxRight>
        <AnswerBoxUserInfo>
          <AnswerBoxSubjectname>{user.name}</AnswerBoxSubjectname>
          {answer && <AnswerBoxCreatedAt>{time}</AnswerBoxCreatedAt>}
        </AnswerBoxUserInfo>
        {answer ? (
          <EditableAnswer
            answer={answer}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
          />
        ) : (
          <AnswerForm onClick={handleCreateAnswer} />
        )}
      </AnswerBoxRight>
    </AnswerBoxWrapper>
  );
};

export default AnswerEditBox;

const AnswerBoxWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 32px;
  }
`;

const AnswerBoxUserImage = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  flex: 0 0 auto;

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const AnswerBoxRight = styled.div`
  flex: 1;
`;

const AnswerBoxSubjectname = styled.span`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const AnswerBoxCreatedAt = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray40};
`;

const AnswerBoxUserInfo = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  margin-bottom: 4px;
`;
