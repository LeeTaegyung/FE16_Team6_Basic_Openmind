import styled from 'styled-components';

function QuestionBox({ children }) {
  return (
    <QuestionBoxWrapper>
      <div>
        <QuestionBoxText>질문 · </QuestionBoxText>
        <QuestionBoxCreatedAt>{children.createdAt}</QuestionBoxCreatedAt>
      </div>
      <QuestionBoxContent>{children.content}</QuestionBoxContent>
    </QuestionBoxWrapper>
  );
}

export default QuestionBox;

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
