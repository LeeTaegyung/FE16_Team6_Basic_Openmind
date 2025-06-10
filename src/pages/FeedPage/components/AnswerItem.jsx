import { useEffect, useState } from 'react';

import Meatball from '@components/Meatball';
import axios from 'axios';
import styled from 'styled-components';

import AnswerBox from './AnswerBox';
import AnswerContent from './AnswerContent';
import AnswerEditBox from './AnswerEditBox';
import AnswerForm from './AnswerForm';
import AnswerViewBox from './AnswerViewBox';
import QuestionBox from './QuestionBox';
import Badge from '../../../components/Badge';
import DislikeButton from '../../../components/DislikeButton';
import LikeButton from '../../../components/LikeButton';
import { useUserInfo } from '../../../context/UserContext';
import { appendToLocalStorageArray } from '../../../functions/appendToLocalStorageArray';

function AnswerItem({ question, isEditable }) {
  const [isLikePressed, setIsLikePressed] = useState(false);
  const [isDislikePressed, setIsDislikePressed] = useState(false);
  const [isReactionPressed, setIsReactionPressed] = useState(false);
  const [likeCount, setLikeCount] = useState(question.like);
  const [user] = useUserInfo();

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const storageItem = localStorage.getItem('reaction');
  const reactionList = JSON.parse(storageItem);

  // handleLikeClick랑 handleDislikeClick 추상화할 수 있게 고민해보기.
  const handleLikeClick = () => {
    axios.post(`${baseUrl}/questions/${question.id}/reaction/`, {
      type: 'like',
    });
    setLikeCount((prev) => prev + 1);
    setIsLikePressed(true);
    setIsReactionPressed(true);
    appendToLocalStorageArray('reaction', {
      questionId: question.id,
      reaction: 'like',
    });
  };

  const handleDislikeClick = () => {
    axios.post(`${baseUrl}/questions/${question.id}/reaction/`, {
      type: 'dislike',
    });
    setIsDislikePressed(true);
    setIsReactionPressed(true);
    appendToLocalStorageArray('reaction', {
      questionId: question.id,
      reaction: 'dislike',
    });
  };

  useEffect(() => {
    if (!reactionList) return;
    reactionList.map((el) => {
      if (el.questionId === question.id) {
        setIsReactionPressed(true);
        if (el.reaction === 'like') setIsLikePressed(true);
        else if (el.reaction === 'dislike') setIsDislikePressed(true);
      } else {
        return;
      }
    });
  }, []);

  return (
    <AnswerItemWrapper>
      <AnswerItemUpperWrapper>
        <Badge variant={question.answer ? 'answered' : 'notAnswered'}>
          {question.answer ? '답변 완료' : '미답변'}
        </Badge>
        {isEditable && (
          <Meatball
            questionId={question.id}
            questionStatus={question.answer ? false : true}
          />
        )}
      </AnswerItemUpperWrapper>
      <QuestionBox question={question} />
      {/* edit의 상태값에 상관없이 답변 보여주기. */}

      {isEditable ? (
        <AnswerEditBox answer={question.answer} questionId={question.id} />
      ) : (
        <AnswerViewBox answer={question.answer} />
      )}
      <HorizontalLine />
      <ReactionButton>
        <LikeButton
          onClick={handleLikeClick}
          isPressed={isLikePressed}
          likeCount={likeCount}
          disabled={isReactionPressed}
        />
        <DislikeButton
          onClick={handleDislikeClick}
          isPressed={isDislikePressed}
          disabled={isReactionPressed}
        />
      </ReactionButton>
    </AnswerItemWrapper>
  );
}

export default AnswerItem;

const AnswerItemWrapper = styled.div`
  padding: 32px;
  background-color: ${({ theme }) => theme.color.gray10};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
`;

const AnswerItemUpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

const HorizontalLine = styled.div`
  margin: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};

  @media (min-width: 768px) {
    margin-top: 32px;
  }
`;

const ReactionButton = styled.div`
  display: flex;
  gap: 32px;
`;
