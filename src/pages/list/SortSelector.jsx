import { useState } from 'react';

import ArrowDown from '@assets/icons/ArrowDown.svg?react';
import ArrowUp from '@assets/icons/ArrowUp.svg?react';
import styled from 'styled-components';

function SortSelector() {
  const [isOpen, setIsOpen] = useState(false);
  // 나중에 쿼리스트링으로 편입
  const [order, setOrder] = useState('time');

  function handleClick(e) {
    if (e.target.tagName !== 'LI') return;

    const targetValue = e.target.dataset.value;
    setOrder(targetValue);
  }

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <Selector
      className={isOpen ? 'isActive' : null}
      aria-label='정렬 순서 선택'
    >
      {order === 'name' ? '이름순' : '최신순'}
      {isOpen ? <ArrowUp /> : <ArrowDown />}
      <input
        className='toggle-dropbox'
        type='checkbox'
        aria-checked='false'
        onClick={handleToggle}
      />
      <ul onClick={handleClick}>
        <li data-value='name' className={order === 'name' ? 'selected' : null}>
          이름순
        </li>
        <li data-value='time' className={order === 'time' ? 'selected' : null}>
          최신순
        </li>
      </ul>
    </Selector>
  );
}

export default SortSelector;

// 커스텀 셀렉터
const Selector = styled.label`
  border-radius: 8px;
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.gray40};
  background-color: ${({ theme }) => theme.color.gray10};
  color: ${({ theme }) => theme.color.gray40};
  position: relative;

  &.isActive {
    border-color: ${({ theme }) => theme.color.gray60};
    color: ${({ theme }) => theme.color.gray60};
  }

  svg {
    width: 14px;
    height: 14px;
  }

  input {
    display: none;
  }

  ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    border-radius: 8px;
    box-shadow: var(--shadow-1);
    width: 100%;
    margin-top: 4px;

    & li {
      padding: 6px 16px;
      color: ${({ theme }) => theme.color.gray50};
      border: 1px solid ${({ theme }) => theme.color.gray30};
      border-radius: 8px;
      background-color: ${({ theme }) => theme.color.gray10};

      &:first-child {
        border-bottom: none;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:nth-child(2) {
        border-top: none;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
      }

      &.selected {
        color: ${({ theme }) => theme.color.blue50};
      }
    }
  }

  :active {
  }

  .toggle-dropbox:checked + ul {
    display: block;
  }
`;
