import styled from 'styled-components';

import AnswerContent from './AnswerContent';
import { useUserInfo } from '../../../context/UserContext';
import { relativeTimeCalculator } from '../../../functions/relativeTimeCalculator';

const AnswerViewBox = ({ answer }) => {
  const [user] = useUserInfo();
  // 읽기모드
  // question.answer ? (
  //   <AnswerContent answer={question.answer} />
  // ) : null

  if (!answer) return;
  const time = relativeTimeCalculator(answer.createdAt);

  return (
    <AnswerBoxWrapper>
      <AnswerBoxUserImage src={user.imageSource} alt='답변자 프로필 사진' />
      <AnswerBoxRight>
        <AnswerBoxUserInfo>
          <AnswerBoxSubjectname>{user.name}</AnswerBoxSubjectname>
          {answer && <AnswerBoxCreatedAt>{time}</AnswerBoxCreatedAt>}
        </AnswerBoxUserInfo>
        <AnswerContent answer={answer} />

        {/* {answer && answer.isRejected ? (
          <AnswerBoxText isRejected={answer.isRejected}>
            {answer.isRejected ? '답변 거절' : answer.content}
          </AnswerBoxText>
        ) : (
          <AnswerBoxText>{}</AnswerBoxText>
        )} */}
      </AnswerBoxRight>
    </AnswerBoxWrapper>
  );
};

export default AnswerViewBox;

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
