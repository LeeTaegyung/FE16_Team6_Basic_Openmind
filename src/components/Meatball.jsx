import { useRef } from 'react';

import Close from '@assets/icons/Close.svg?react';
import Edit from '@assets/icons/Edit.svg?react';
import More from '@assets/icons/More.svg?react';
import { useGetQuestions } from '@context/PostContext';
import { useClickOutside } from '@hooks/useClickOutside';
import { deleteQuestion } from '@service/api';
import styled, { css } from 'styled-components';

function Meatball({ questionId, questionStatus, isAnswered, callback }) {
  const dropdownRef = useRef(null);
  const [isOpen, handleToggle] = useClickOutside(dropdownRef);
  const { _, setQuestions } = useGetQuestions();

  const items = [
    {
      icon: <Edit width={14} height={14} />,
      text: '수정하기',
      isDisable: questionStatus,
      function: () => {
        callback(true);
        handleToggle();
      },
    },
    {
      icon: <Close width={14} height={14} />,
      text: '삭제하기',
      isDisable: !isAnswered,
      function: (questionId) => {
        // 삭제하기가 답이 달렸을 때에만 작동,
        deleteQuestion(questionId).then(() =>
          setQuestions((prev) => {
            const filteredItems = prev.filter((el) => el.id !== questionId);
            return filteredItems;
          }),
        );
        handleToggle();
      },
    },
  ];

  return (
    <MoreButtonWrapper ref={dropdownRef}>
      <MoreButton onClick={handleToggle}>
        <More />
      </MoreButton>
      {isOpen && <Dropdown questionId={questionId} items={items} />}
    </MoreButtonWrapper>
  );
}

export default Meatball;

function Dropdown({ questionId, items }) {
  return (
    <DropdownWrapper>
      <DropdownList>
        {items.map((el, i) => (
          <DropdownItem
            key={i}
            onClick={() => (el.isDisable ? null : el.function(questionId))}
            isDisable={el.isDisable}
          >
            {el.icon} {el.text}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownWrapper>
  );
}

const MoreButtonWrapper = styled.div`
  position: relative;
`;

const MoreButton = styled.button`
  width: 32px;
  height: 32px;
  position: relative;
  border: 0;
  background-color: transparent;
  border-radius: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray20};
  }
`;

const DropdownWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  width: 120px;
  padding: 4px;
  background-color: ${({ theme }) => theme.color.gray10};
  border: 1px solid ${({ theme }) => theme.color.gray30};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
`;

const DropdownList = styled.ul`
  list-style: none;
`;

const DropdownItem = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDisable',
})`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray20};
  }

  ${(props) =>
    props.isDisable &&
    css`
      color: ${props.theme.color.gray30};
      cursor: not-allowed;

      &:hover {
        background-color: transparent;
      }
    `}
`;
