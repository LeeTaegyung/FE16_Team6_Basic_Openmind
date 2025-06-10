import { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';

const AnswerStateContext = createContext(null);
const AnswerSetterContext = createContext(() => {});

function AnswerProvider({ id, children }) {
  const [answer, setAnswer] = useState({});
  const [answerArr, setAnswerArr] = useState([]);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const QUESTION_LIMIT = 3;

  useEffect(() => {
    axios
      .get(`${baseUrl}/subjects/${id}/questions/?limit=${QUESTION_LIMIT}`)
      .then((res) => {
        setAnswer(res.data);
        setAnswerArr(res.data.results);
      });
  }, []);

  return (
    <AnswerStateContext.Provider value={{ answer, answerArr }}>
      <AnswerSetterContext.Provider value={{ setAnswer, setAnswerArr }}>
        {children}
      </AnswerSetterContext.Provider>
    </AnswerStateContext.Provider>
  );
}

export default AnswerProvider;

export const useAnswers = () => useContext(AnswerStateContext);
export const useAnswersSetter = () => useContext(AnswerSetterContext);
