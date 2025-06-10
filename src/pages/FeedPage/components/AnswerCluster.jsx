import { useEffect, useRef } from 'react';

import Empty from '@assets/icons/Empty.svg?react';
import Message from '@assets/icons/Messages.svg?react';
import { useAnswers, useAnswersSetter } from '@context/AnswerContext';
import { useUserInfo } from '@context/UserContext';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import axios from 'axios';
import styled from 'styled-components';

import AnswerItem from './AnswerItem';

function AnswerCluster() {
  const loadingRef = useRef(null); // 스크롤해서 보이게 되는 Element의 Ref
  const user = useUserInfo();
  const { answer, answerArr } = useAnswers();
  const { setAnswer, setAnswerArr } = useAnswersSetter();

  const additionalFetchRef = useRef(() => {});
  additionalFetchRef.current = () => {
    axios.get(answer.next).then((res) => {
      setAnswer(res.data);
      setAnswerArr((prev) => [...prev, ...res.data.results]);
    });
  };

  const [observe, unobserve] = useIntersectionObserver(additionalFetchRef);

  useEffect(() => {
    if (!answer) return;
    if (answerArr.length >= 3) observe(loadingRef.current);
    if (answerArr.length === answer.count) unobserve(loadingRef.current);
  }, [answerArr]);

  let content;

  if (!answerArr) {
    content = <AnswerClusterText>로딩중...</AnswerClusterText>;
  } else if (answer.count === 0) {
    content = (
      <>
        <AnswerClusterText>
          <Message height={24} />
          아직 질문이 없습니다.
        </AnswerClusterText>
        <AnswerClusterEmpty>
          <Empty />
        </AnswerClusterEmpty>
      </>
    );
  } else {
    content = (
      <>
        <AnswerClusterText>
          <Message height={24} />
          {answer.count}개의 질문이 있습니다.
        </AnswerClusterText>
        {answerArr.map((el) => (
          <AnswerItem key={el.id} subjectInfo={user} result={el} />
        ))}
        <AnswerClusterText ref={loadingRef}>
          {answerArr.length === answer.count ? '끝!' : '로딩중...'}
        </AnswerClusterText>
      </>
    );
  }

  return (
    <AnswerClusterBody>
      <AnswerClusterWrapper>{content}</AnswerClusterWrapper>
    </AnswerClusterBody>
  );
}

export default AnswerCluster;

const AnswerClusterBody = styled.main`
  width: 100%;
  margin-top: 48px;
  padding: 0px 24px;
  display: flex;
  justify-content: center;
`;

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

const AnswerClusterEmpty = styled.div`
  width: 100%;
  padding: 16px 0px;
  display: flex;
  justify-content: center;
`;
