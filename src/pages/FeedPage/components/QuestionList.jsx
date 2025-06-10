import { useEffect, useRef } from 'react';

import { useGetPost, useGetQuestions } from '@context/PostContext';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import axios from 'axios';
import styled from 'styled-components';

import AnswerItem from './AnswerItem';
import QuestionTotalMsg from './QuestionTotalMsg';

const QuestionList = ({ isEditable }) => {
  const loadingRef = useRef(null); // 스크롤해서 보이게 되는 Element의 Ref
  const { post, setPost } = useGetPost();
  const { questions, setQuestions } = useGetQuestions();

  const additionalFetchRef = useRef(() => {});
  additionalFetchRef.current = () => {
    axios.get(post.next).then((res) => {
      setPost(res.data);
      setQuestions((prev) => [...prev, ...res.data.results]);
    });
  };

  const [observe, unobserve] = useIntersectionObserver(additionalFetchRef);

  useEffect(() => {
    if (!post.count) return;
    if (questions.length >= 3) observe(loadingRef.current);
    if (questions.length === post.count) unobserve(loadingRef.current);
  }, [questions]);

  return (
    <>
      <QuestionTotalMsg count={post.count} />
      {questions.map((question) => (
        <AnswerItem
          key={question.id}
          question={question}
          isEditable={isEditable}
        />
      ))}
      <AnswerClusterText ref={loadingRef}>
        {questions.length === post.count ? '끝!' : '로딩중...'}
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
