import styled from 'styled-components';

import AnswerContent from './AnswerContent';
import AnswerForm from './AnswerForm';
import { relativeTimeCalculator } from '../../../functions/relativeTimeCalculator';

function AnswerBox({ subjectInfo, answer, isEditable }) {
  const time = answer && relativeTimeCalculator(answer.createdAt);

  {
    /*
        isEditable이 true일때에만 가능.
        답변 없음 -> 폼박스
        답변 있음
           -> 내용
           -> 답변 거절
        수정하기 -> 답변이 있을 떄에만 수정,
        삭제하기 -> 답변이 있을 때에만 삭제,
        답변거절
          -> 답변이 있어도 답변 거절로 수정 가능. 답변으로 달았던 내용은 초기화.
          -> 답변 거절을 해지할 수도 있음. 답변 거절을 해지하면, 다시 작성할 수 있음.
      */
  }

  return (
    <AnswerBoxWrapper>
      <AnswerBoxUserImage
        src={subjectInfo.imageSource}
        alt='답변자 프로필 사진'
      />
      <AnswerBoxRight>
        <AnswerBoxUserInfo>
          <AnswerBoxSubjectname>{subjectInfo.name}</AnswerBoxSubjectname>
          {answer && <AnswerBoxCreatedAt>{time}</AnswerBoxCreatedAt>}
        </AnswerBoxUserInfo>

        {isEditable ? <AnswerForm /> : <AnswerContent answer={answer} />}

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
}

export default AnswerBox;

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
