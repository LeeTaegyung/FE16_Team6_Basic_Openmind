import { useEffect, useRef, useState } from 'react';

import AnswerCluster from '@components/postId/AnswerCluster';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import FloatingButton from './components/FloatingButton';
import PostHeader from './components/PostHeader';

function FeedPage() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [subject, setSubject] = useState({});
  const [result, setResult] = useState({});
  const [questions, setQuestions] = useState([]);
  const questionsRef = useRef(null);
  const params = useParams();

  const subjectId = params.id;

  const additionalFetch = () => {
    axios.get(questionsRef.current.next).then((res) => {
      setQuestions((prev) => [...prev, ...res.data.results]);
    });
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/subjects/${subjectId}/`)
      .then((res) => setSubject(res.data));

    axios
      .get(`${baseUrl}/subjects/${subjectId}/questions/?limit=3`)
      .then((res) => {
        setResult(res.data);
        setQuestions(res.data.results);
      });
  }, []);

  useEffect(() => {
    questionsRef.current = result;
  }, [result]);

  return (
    <>
      <PostHeader />
      <AnswerCluster
        subjectInfo={subject}
        result={result}
        questions={questions}
        callback={additionalFetch}
      />
      <FloatingButton />
    </>
  );
}

export default FeedPage;
