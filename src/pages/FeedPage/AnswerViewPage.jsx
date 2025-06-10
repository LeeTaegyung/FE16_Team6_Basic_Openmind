import AnswerCluster from './components/AnswerCluster';
import FloatingButton from './components/FloatingButton';

function AnswerViewPage() {
  return (
    <>
      <AnswerCluster isEditable={false} />
      <FloatingButton />
    </>
  );
}

export default AnswerViewPage;
