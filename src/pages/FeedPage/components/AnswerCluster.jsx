import { useGetPost } from '@context/PostContext';
import styled from 'styled-components';

import QuestionEmpty from './QuestionEmpty';
import QuestionList from './QuestionList';

function AnswerCluster({ isEditable }) {
  // isEditable 를 context로 분리할지 고민.
  const { post } = useGetPost();

  if (!post) {
    // 데이터가 로딩중일때에는 로딩중...을 보여주는데, 이건 나중에 밖으로 뺄지를 고민해봐야할 것 같음.
    console.log('loading...');
    return <div>로딩중....</div>;
  }

  return (
    <AnswerClusterBody>
      {/* 삭제하기 버튼을 넣어주어야 함. */}
      <AnswerClusterWrapper>
        {!post.count ? (
          <QuestionEmpty />
        ) : (
          <QuestionList isEditable={isEditable} />
        )}
      </AnswerClusterWrapper>
    </AnswerClusterBody>
  );
}

export default AnswerCluster;

const AnswerClusterBody = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 48px;
  padding: 0px 24px 50px;
`;

const AnswerClusterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 716px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.color.brown30};
  background-color: ${({ theme }) => theme.color.brown10};
  border-radius: 16px;
`;
