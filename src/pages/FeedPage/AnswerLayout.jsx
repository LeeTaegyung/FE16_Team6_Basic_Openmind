import { useEffect } from 'react';

import { useAnswersSetter } from '@context/AnswerContext';
import { useUserInfo, useUserInfoSetter } from '@context/UserContext';
import axios from 'axios';
import { Outlet, useParams } from 'react-router-dom';

import PostHeader from './components/PostHeader';

function AnswerLayout() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const QUESTION_LIMIT = 3;
  const { id } = useParams();

  const setUser = useUserInfoSetter();
  const user = useUserInfo();
  const { setAnswer, setAnswerArr } = useAnswersSetter();

  useEffect(() => {
    axios.get(`${baseUrl}/subjects/${id}/`).then((res) => setUser(res.data));
    axios
      .get(`${baseUrl}/subjects/${id}/questions/?limit=${QUESTION_LIMIT}`)
      .then((res) => {
        setAnswer(res.data);
        setAnswerArr(res.data.results);
      });
  }, []);

  return (
    <>
      <PostHeader
        name={user.name}
        imageSource={user.imageSource}
        subjectId={id}
      />
      <Outlet />
    </>
  );
}

export default AnswerLayout;
