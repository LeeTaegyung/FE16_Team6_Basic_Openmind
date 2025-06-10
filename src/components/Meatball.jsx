import { useRef, useState } from 'react';

import Close from '@assets/icons/Close.svg?react';
import Edit from '@assets/icons/Edit.svg?react';
import More from '@assets/icons/More.svg?react';
import { useClickOutside } from '@hooks/useClickOutside';
import styled from 'styled-components';

const items = [
  {
    icon: <Edit width={14} height={14} />,
    text: '수정하기',
    function: (questionId) => console.log(questionId + '를 수정하기'),
  },
  {
    icon: <Close width={14} height={14} />,
    text: '삭제하기',
    function: (questionId) => console.log(questionId + '를 삭제하기'),
  },
];

function Meatball({ questionId }) {
  const dropdownRef = useRef(null);
  const [isOpen, handleToggle] = useClickOutside(dropdownRef);

  return (
    <MoreButtonWrapper ref={dropdownRef}>
      <MoreButton onClick={handleToggle}>
        <More />
      </MoreButton>
      {isOpen && <Dropdown questionId={questionId} />}
    </MoreButtonWrapper>
  );
}

export default Meatball;

function Dropdown({ questionId }) {
  return (
    <DropdownWrapper>
      <DropdownList>
        {items.map((el, i) => (
          <DropdownItem key={i} onClick={() => el.function(questionId)}>
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

const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray20};
  }
`;
