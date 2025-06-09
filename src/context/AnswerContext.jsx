import { createContext, useContext, useState } from 'react';

const AnswerStateContext = createContext(null);
const AnswerSetterContext = createContext(() => {});

function AnswerProvider({ children }) {
  const [answer, setAnswer] = useState([]);
  return (
    <AnswerStateContext.Provider value={answer}>
      <AnswerSetterContext.Provider value={setAnswer}>
        {children}
      </AnswerSetterContext.Provider>
    </AnswerStateContext.Provider>
  );
}

export default AnswerProvider;

export const useQuestions = () => useContext(AnswerStateContext);
export const useQuestionsSetter = () => useContext(AnswerSetterContext);
