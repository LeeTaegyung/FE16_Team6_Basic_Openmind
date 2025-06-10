import { useParams } from 'react-router-dom';

import AnswerCluster from './components/AnswerCluster';

function AnswerEditPage() {
  const currentId = localStorage.getItem('subjectId') ?? '';
  const { id: subjectId } = useParams();

  return (
    <>
      <AnswerCluster isEditable={currentId === subjectId ? true : false} />
    </>
  );
}

export default AnswerEditPage;
