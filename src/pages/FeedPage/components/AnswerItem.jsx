import { useState } from 'react';

import Badge from '@components/Badge';
import Meatball from '@components/Meatball';
import styled from 'styled-components';

import AnswerEditBox from './AnswerEditBox';
import AnswerViewBox from './AnswerViewBox';
import QuestionBox from './QuestionBox';
import ReactionButton from './ReactionButton';

function AnswerItem({ question, isEditable }) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <AnswerItemWrapper>
      <AnswerItemUpperWrapper>
        <Badge variant={question.answer ? 'answered' : 'notAnswered'}>
          {question.answer ? '답변 완료' : '미답변'}
        </Badge>
        {isEditable && (
          <Meatball
            questionId={question.id}
            questionStatus={question.answer ? false : true}
            callback={setIsEditMode}
          />
        )}
      </AnswerItemUpperWrapper>
      <QuestionBox question={question} />

      {isEditable ? (
        <AnswerEditBox
          answer={question.answer}
          questionId={question.id}
          isEditMode={isEditMode}
        />
      ) : (
        <AnswerViewBox answer={question.answer} />
      )}
      <HorizontalLine />
      <ReactionButton questionId={question.id} like={question.like} />
    </AnswerItemWrapper>
  );
}

export default AnswerItem;

const AnswerItemWrapper = styled.div`
  padding: 32px;
  background-color: ${({ theme }) => theme.color.gray10};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
`;

const AnswerItemUpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

const HorizontalLine = styled.div`
  margin: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};

  @media (min-width: 768px) {
    margin-top: 32px;
  }
`;
