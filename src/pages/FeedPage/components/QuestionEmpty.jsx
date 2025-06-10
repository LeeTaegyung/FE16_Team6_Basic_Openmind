import Empty from '@assets/icons/Empty.svg?react';
import styled from 'styled-components';

import QuestionTotalMsg from './QuestionTotalMsg';

const QuestionEmpty = () => {
  return (
    <EmptyWrap>
      <QuestionTotalMsg />
      <Empty className='empty-image' />
    </EmptyWrap>
  );
};

export default QuestionEmpty;

const EmptyWrap = styled.div`
  display: block;

  .empty-image {
    display: block;
    width: 114px;
    margin: 66px auto 106px;

    @media (min-width: 768px) {
      width: auto;
      margin: 70px auto 65px;
    }
  }
`;
