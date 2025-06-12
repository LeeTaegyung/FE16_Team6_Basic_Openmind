import { useEffect, useState } from 'react';

import DislikeButton from '@components/DislikeButton';
import LikeButton from '@components/LikeButton';
import { appendToLocalStorageArray } from '@functions/appendToLocalStorageArray';
import axios from 'axios';
import styled from 'styled-components';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ReactionButton = ({ questionId, like }) => {
  // question의 id와 like 정보 필요
  const [isLikePressed, setIsLikePressed] = useState(false);
  const [isDislikePressed, setIsDislikePressed] = useState(false);
  const [isReactionPressed, setIsReactionPressed] = useState(false);
  const [likeCount, setLikeCount] = useState(like);
  const storageItem = localStorage.getItem('reaction');
  const reactionList = JSON.parse(storageItem);

  // handleLikeClick랑 handleDislikeClick 추상화할 수 있게 고민해보기.
  const handleLikeClick = () => {
    axios.post(`${BASE_URL}/questions/${questionId}/reaction/`, {
      type: 'like',
    });
    setLikeCount((prev) => prev + 1);
    setIsLikePressed(true);
    setIsReactionPressed(true);
    appendToLocalStorageArray('reaction', {
      questionId: questionId,
      reaction: 'like',
    });
  };

  const handleDislikeClick = () => {
    axios.post(`${BASE_URL}/questions/${questionId}/reaction/`, {
      type: 'dislike',
    });
    setIsDislikePressed(true);
    setIsReactionPressed(true);
    appendToLocalStorageArray('reaction', {
      questionId: questionId,
      reaction: 'dislike',
    });
  };

  useEffect(() => {
    if (!reactionList) return;
    reactionList.map((el) => {
      if (el.questionId === questionId) {
        setIsReactionPressed(true);
        if (el.reaction === 'like') setIsLikePressed(true);
        else if (el.reaction === 'dislike') setIsDislikePressed(true);
      } else {
        return;
      }
    });
  }, []);
  return (
    <StyledReactionButton>
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
    </StyledReactionButton>
  );
};

export default ReactionButton;

const StyledReactionButton = styled.div`
  display: flex;
  gap: 32px;
`;
