import styled from 'styled-components';

const answerStatus = Object.freeze({
  NOT_ANSWERED: 'notAnswered',
  ANSWERED: 'answered',
});

function Badge({ status }) {
  switch (status) {
    case answerStatus.NOT_ANSWERED:
      return <NotAnsweredBadge>미답변</NotAnsweredBadge>;

    case answerStatus.ANSWERED:
      return <AnsweredBadge>답변 완료</AnsweredBadge>;

    default:
      console.warn(`Badge Component: Unknown status: ${status}`);
      return;
  }
}

export default Badge;

const AnsweredBadge = styled.div`
  padding: 4px 12px;
  border: 1px solid #542f1a;
  border-radius: 8px;
`;

const NotAnsweredBadge = styled.div`
  padding: 4px 12px;
  border: 1px solid #818181;
  color: #818181;
  border-radius: 8px;
`;
