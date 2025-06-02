import styled from 'styled-components';

import AnswerItem from './AnswerItem';
import Message from '../../assets/Messages.svg?react';

function AnswerCluster({ subjectInfo, result }) {
  return (
    <AnswerClusterWrapper>
      <AnswerClusterText>
        <Message height={24} />
        {result.length}개의 질문이 있습니다.
      </AnswerClusterText>
      {result.map((el) => (
        <AnswerItem key={el.id} subjectInfo={subjectInfo} result={el} />
      ))}
    </AnswerClusterWrapper>
  );
}

export default AnswerCluster;

const AnswerClusterWrapper = styled.div`
  width: 716px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.color.brown10};
  border: 1px solid ${({ theme }) => theme.color.brown30};
  border-radius: 16px;
`;

const AnswerClusterText = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.brown40};
  font-size: 20px;
`;
