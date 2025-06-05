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
  const resultRef = useRef(null);
  const params = useParams();

  const subjectId = params.id;

  const additionalFetch = () => {
    axios.get(resultRef.current.next).then((res) => {
      setResult(res.data);
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
    resultRef.current = result;
  }, [result]);

  return (
    <>
      <PostHeader
        name={'홍길동'}
        imageSource={
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8'
        }
        subjectId={subjectId}
      />
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
