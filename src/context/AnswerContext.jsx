import { createContext, useContext, useState } from 'react';

const AnswerStateContext = createContext(null);
const AnswerSetterContext = createContext(() => {});

function AnswerProvider({ children }) {
  const [answer, setAnswer] = useState({});
  const [answerArr, setAnswerArr] = useState([]);

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
