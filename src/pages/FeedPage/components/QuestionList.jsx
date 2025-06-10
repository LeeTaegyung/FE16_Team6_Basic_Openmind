import { useEffect, useRef } from 'react';

import { useGetPost, useGetQuestions } from '@context/PostContext';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { fetchPost } from '@service/api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import AnswerItem from './AnswerItem';
import QuestionTotalMsg from './QuestionTotalMsg';

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const QUESTION_LIMIT = 3;

const QuestionList = ({ isEditable }) => {
  const { id } = useParams();
  const loadingRef = useRef(null); // 스크롤해서 보이게 되는 Element의 Ref
  const { post, setPost } = useGetPost();
  const { questions, setQuestions } = useGetQuestions();

  const additionalFetchRef = useRef(() => {});
  additionalFetchRef.current = () => {
    // offset 방식의 문제점 : 중간에 값이 추가 되거나, 삭제 되면 중복 되는 값을 불러오거나 빼먹고 불러오게 된다.
    // offset을 따로 관리해줘야할 거 같다. Modal에서 추가 되는 경우가 있기 때문에, 값을 받아온 offset에 +1 해주고, offset은 상태로 관리하기.
    // 상태로 관리하려다가, 생각해보니깐, questions.length의 값이 offset이 되어서, 그걸 사용하는 걸로...! => 조금 불안정하다는 생각이 들수도 있음.
    fetchPost(id, questions.length).then((data) => {
      setPost(data);
      setQuestions((prev) => [...prev, ...data.results]);
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
