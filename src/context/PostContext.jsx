import { createContext, useContext, useEffect, useState } from 'react';

import { fetchPost } from '@service/api';
import { useParams } from 'react-router-dom';

const PostContext = createContext();
const QuestionsContext = createContext();

export function PostProvider({ children }) {
  const { id } = useParams();
  const [post, setPost] = useState({}); // 해당 페이지에 대한 모든 정보
  const [questions, setQuestions] = useState([]); // 해당 페이지의 질문 정보

  useEffect(() => {
    fetchPost(id).then((data) => {
      setPost(data);
      setQuestions(data.results);
    });
  }, [id]);

  return (
    <PostContext.Provider value={{ post, setPost }}>
      <QuestionsContext.Provider value={{ questions, setQuestions }}>
        {children}
      </QuestionsContext.Provider>
    </PostContext.Provider>
  );
}

export const useGetPost = () => {
  const context = useContext(PostContext);

  if (!context) throw new Error('context');

  const { post, setPost } = context;
  return { post, setPost };
};

export const useGetQuestions = () => {
  const context = useContext(QuestionsContext);

  if (!context) throw new Error('context');

  const { questions, setQuestions } = context;
  return { questions, setQuestions };
};
