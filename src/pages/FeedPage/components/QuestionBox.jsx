import styled from 'styled-components';

import { relativeTimeCalculator } from '../../../functions/relativeTimeCalculator';

function QuestionBox({ question }) {
  const time = relativeTimeCalculator(question.createdAt);
  return (
    <>
      <QuestionBoxInfo>
        <QuestionBoxText>질문 · </QuestionBoxText>
        <QuestionBoxCreatedAt>{time}</QuestionBoxCreatedAt>
      </QuestionBoxInfo>
      <QuestionBoxContent>{question.content}</QuestionBoxContent>
    </>
  );
}

export default QuestionBox;

const QuestionBoxInfo = styled.div`
  margin-bottom: 4px;
`;

const QuestionBoxText = styled.span`
  color: ${({ theme }) => theme.color.gray40};
  font-size: 14px;
  font-weight: 500;
`;

const QuestionBoxCreatedAt = styled.span`
  color: ${({ theme }) => theme.color.gray40};
  font-size: 14px;
  font-weight: 500;
`;

const QuestionBoxContent = styled.span``;
