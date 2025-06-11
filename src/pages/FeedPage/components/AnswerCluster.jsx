import DeleteButton from '@components/DeleteButton';
import { useGetPost } from '@context/PostContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import QuestionEmpty from './QuestionEmpty';
import QuestionList from './QuestionList';

function AnswerCluster({ isEditable }) {
  // isEditable이 자기가 만든 질문인지 아닌지 확인하는 상태값 => context로 분리를 해야하나?..
  // 프롭스 드릴링 이슈는 어쩔수 없는듯....
  const { post } = useGetPost();
  const { id } = useParams();

  if (!post) {
    // 데이터가 로딩중일때에는 로딩중...을 보여주는데, 이건 나중에 밖으로 뺄지를 고민해봐야할 것 같음.
    console.log('loading...');
    return <div>로딩중....</div>;
  }

  return (
    <>
      {/* 삭제하기 버튼을 넣어주어야 함. */}
      <AnswerClusterBody>
        {isEditable && (
          <DeleteButtonArea>
            <DeleteButton subjectInfo={id} />
          </DeleteButtonArea>
        )}
        <AnswerClusterWrapper>
          {!post.count ? (
            <QuestionEmpty />
          ) : (
            <QuestionList isEditable={isEditable} />
          )}
        </AnswerClusterWrapper>
      </AnswerClusterBody>
    </>
  );
}

export default AnswerCluster;

const AnswerClusterBody = styled.main`
  position: relative;
  margin: 54px 24px 50px;

  @media (min-width: 768px) {
    margin: 54px 32px 50px;
  }

  @media (min-width: 1200px) {
    margin: 54px auto 140px;
    max-width: 716px;
  }
`;

const DeleteButtonArea = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 6px;
`;

const AnswerClusterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.color.brown30};
  background-color: ${({ theme }) => theme.color.brown10};
  border-radius: 16px;
`;
