import Message from '@assets/icons/Messages.svg?react';
import styled from 'styled-components';

const QuestionTotalMsg = ({ count }) => {
  return (
    <StyledTotalMsg>
      <Message height={24} />
      {!count ? '아직 질문이 없습니다' : `${count}개의 질문이 있습니다.`}
    </StyledTotalMsg>
  );
};

export default QuestionTotalMsg;

const StyledTotalMsg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.brown40};
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
