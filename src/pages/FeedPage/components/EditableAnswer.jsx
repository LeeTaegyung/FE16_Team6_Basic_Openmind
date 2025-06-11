import { useGetQuestions } from '@context/PostContext';
import { updateAnswer } from '@service/api';

import AnswerContent from './AnswerContent';
import AnswerForm from './AnswerForm';

const EditableAnswer = ({ answer, isEditMode, setIsEditMode }) => {
  const { setQuestions } = useGetQuestions();

  // 답변 수정
  const handleUpdateAnswer = async (answerText) => {
    const data = await updateAnswer(answer.id, answerText);

    setQuestions((prev) => {
      const mappedArr = prev.map((el) => {
        if (el.id === data.questionId) {
          return { ...el, answer: data };
        }

        return el;
      });
      return mappedArr;
    });
    setIsEditMode(false);
  };

  return (
    <>
      {isEditMode ? (
        // 수정폼
        <AnswerForm
          content={answer.content}
          isEditMode={isEditMode}
          onClick={handleUpdateAnswer}
        />
      ) : (
        <AnswerContent answer={answer} />
      )}
    </>
  );
};

export default EditableAnswer;
