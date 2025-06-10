import { createContext, useContext, useEffect, useRef, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostContext = createContext();
const QuestionsContext = createContext();

const BASE_URL = import.meta.env.VITE_BASE_URL;
const QUESTION_LIMIT = 3;

function PostProvider({ children }) {
  const { id } = useParams();
  const [post, setPost] = useState({}); // 해당 페이지에 대한 모든 정보
  const [questions, setQuestions] = useState([]); // 해당 페이지의 질문 정보
  const totalCountRef = useRef();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/subjects/${id}/questions/?limit=${QUESTION_LIMIT}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
        setQuestions(res.data.results);
        totalCountRef.current = res.data.count;
      });
  }, []);

  return (
    <PostContext.Provider value={{ post, setPost, totalCountRef }}>
      <QuestionsContext.Provider value={{ questions, setQuestions }}>
        {children}
      </QuestionsContext.Provider>
    </PostContext.Provider>
  );
}

export default PostProvider;

export const useGetPost = () => {
  const context = useContext(PostContext);

  if (!context) throw new Error('context');

  const { post, setPost, totalCountRef } = context;
  return { post, setPost, totalCountRef };
};

export const useGetQuestions = () => {
  const context = useContext(QuestionsContext);

  if (!context) throw new Error('context');

  const { questions, setQuestions, totalCountRef } = context;
  return { questions, setQuestions, totalCountRef };
};
