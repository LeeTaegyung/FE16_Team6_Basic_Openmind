import { useParams } from 'react-router-dom';

import AnswerCluster from './components/AnswerCluster';

function PostEditPage() {
  const currentId = JSON.parse(localStorage.getItem('userData')).id ?? '';
  const { id: userId } = useParams();
  const isEditable = String(currentId) === userId;

  return (
    <>
      <AnswerCluster isEditable={isEditable} />
    </>
  );
}

export default PostEditPage;
