import { useEffect, useRef } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import AnswerItem from './AnswerItem';
import QuestionTotalMsg from './QuestionTotalMsg';
import { useAnswers, useAnswersSetter } from '../../../context/AnswerContext';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const QuestionList = ({ isEditable }) => {
  const loadingRef = useRef(null); // 스크롤해서 보이게 되는 Element의 Ref
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
    if (!answer.count) return;
    if (answerArr.length >= 3) observe(loadingRef.current);
    if (answerArr.length === answer.count) unobserve(loadingRef.current);
  }, [answerArr]);

  return (
    <>
      <QuestionTotalMsg count={answer.count} />
      {answerArr.map((question) => (
        <AnswerItem
          key={question.id}
          question={question}
          isEditable={isEditable}
        />
      ))}
      <AnswerClusterText ref={loadingRef}>
        {answerArr.length === answer.count ? '끝!' : '로딩중...'}
      </AnswerClusterText>
    </>
  );
};

export default QuestionList;

const AnswerClusterText = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.brown40};
  font-size: 20px;
`;
