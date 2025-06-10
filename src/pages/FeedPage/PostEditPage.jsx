import { useParams } from 'react-router-dom';

import AnswerCluster from './components/AnswerCluster';

function PostEditPage() {
  const currentId = localStorage.getItem('subjectId') ?? ''; // getItem에 들어가는 subjectId도 userId로 명칭을 정정해주는 것이 좋아 보임.
  const { id: subjectId } = useParams();

  return (
    <>
      <AnswerCluster isEditable={currentId === subjectId} />
    </>
  );
}

export default PostEditPage;
