import { useRef } from 'react';

import Close from '@assets/icons/Close.svg?react';
import Edit from '@assets/icons/Edit.svg?react';
import More from '@assets/icons/More.svg?react';
import { useGetPost, useGetQuestions } from '@context/PostContext';
import { useClickOutside } from '@hooks/useClickOutside';
import { createAnswer, deleteQuestion, updateAnswer } from '@service/api';
import styled, { css } from 'styled-components';

function Meatball({ question, isAnswered, setIsEditMode }) {
  const dropdownRef = useRef(null);
  const { isOpen, onToggle } = useClickOutside(dropdownRef);
  const { setQuestions } = useGetQuestions();
  const { setPost } = useGetPost();

  const items = [
    {
      icon: <Edit width={14} height={14} />,
      text: '수정하기',
      isDisable: !isAnswered,
      function: () => {
        setIsEditMode(true);
        onToggle();
      },
    },
    {
      icon: <Close width={14} height={14} />,
      text: '삭제하기',
      isDisable: false,
      function: (question) => {
        // 삭제하기가 답이 달렸을 때에만 작동,
        deleteQuestion(question.id).then(() => {
          setQuestions((prev) => {
            const filteredItems = prev.filter((el) => el.id !== question.id);
            return filteredItems;
          });
          setPost((prev) => {
            return { ...prev, count: prev.count - 1 };
          });
        });
        onToggle();
      },
    },
    {
      icon: <Close width={14} height={14} />,
      text: '답변 거절',
      isDisable: false,
      className: 'rejected',
      function: async (question) => {
        const data = isAnswered
          ? await updateAnswer(
              question.answer.id,
              question.answer.content,
              true,
            )
          : await createAnswer(question.id, '&nbsp;', true);

        setQuestions((prev) => {
          return prev.map((el) => {
            return el.id === question.id ? { ...el, answer: data } : el;
          });
        });

        setIsEditMode(false);
        onToggle();
      },
    },
  ];

  return (
    <MoreButtonWrapper ref={dropdownRef}>
      <MoreButton onClick={onToggle}>
        <More />
      </MoreButton>
      {isOpen && <Dropdown question={question} items={items} />}
    </MoreButtonWrapper>
  );
}

export default Meatball;

function Dropdown({ question, items }) {
  return (
    <DropdownWrapper>
      <DropdownList>
        {items.map((el, i) => (
          <DropdownItem
            key={i}
            onClick={() => el.function(question)}
            isDisable={el.isDisable}
            className={el.className ? el.className : null}
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

  &.rejected {
    color: red;
  }
`;
