import { useRef } from 'react';

import ArrowDown from '@assets/icons/ArrowDown.svg?react';
import ArrowUp from '@assets/icons/ArrowUp.svg?react';
import Selector from '@components/Selector';
import { useClickOutside } from '@hooks/useClickOutside';

const sortMenu = {
  time: '최신순',
  name: '이름순',
};

function SortSelector({ queryStrings, setQueryStrings }) {
  const { sort } = queryStrings;
  const selectorRef = useRef(null);
  const [isOpen, onToggle] = useClickOutside(selectorRef);

  //쿼리스트링 변경하기
  function handleClick(key) {
    setQueryStrings((prev) => {
      return {
        ...prev,
        sort: `${key}`,
      };
    });
  }

  function renderMenu() {
    return Object.keys(sortMenu).map((key) => {
      return (
        <li
          onClick={() => handleClick(key)}
          key={key}
          className={key === sort ? 'selected' : null}
        >
          {sortMenu[key]}
        </li>
      );
    });
  }

  return (
    <Selector
      ref={selectorRef}
      isOpen={isOpen}
      onToggle={onToggle}
      renderMenu={renderMenu}
    >
      <button className={`selectorBtn ${isOpen ? 'isActive' : null}`}>
        {sortMenu[sort]}
        <ArrowUp
          className={!isOpen ? 'show' : null}
          aria-label='정렬 드롭다운 올리기'
        />
        <ArrowDown
          className={isOpen ? 'show' : null}
          aria-label='정렬 드롭다운 내리기'
        />
      </button>
    </Selector>
  );
}

export default SortSelector;
