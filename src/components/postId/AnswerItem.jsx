import styled from 'styled-components';

import Badge from '../Badge';
import AnswerBox from './AnswerBox';
import QuestionBox from './QuestionBox';
import DislikeButton from '../DislikeButton';
import LikeButton from '../LikeButton';

function AnswerItem({ subjectInfo, result }) {
  const isPressed = true;
  return (
    <AnswerItemWrapper>
      <Badge variant={result.answer ? 'answered' : 'notAnswered'}>
        {result.answer ? '답변 완료' : '미답변'}
      </Badge>
      <QuestionBox>{result}</QuestionBox>
      {result.answer && (
        <AnswerBox subjectInfo={subjectInfo}>{result.answer}</AnswerBox>
      )}
      <HorizontalLine />
      <ReactionButton>
        <LikeButton
          isPressed={isPressed}
          likeCount={isPressed && result.like}
        />
        <DislikeButton isPressed={false} />
      </ReactionButton>
    </AnswerItemWrapper>
  );
}

export default AnswerItem;

const AnswerItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  background-color: var(--gray-10);
  border-radius: 16px;
  box-shadow: var(--shadow-1);
`;

const HorizontalLine = styled.div`
  border-bottom: 1px solid var(--gray-30);
`;

const ReactionButton = styled.div`
  display: flex;
  gap: 32px;
`;
