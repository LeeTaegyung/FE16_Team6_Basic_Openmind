import { forwardRef } from 'react';

import styled from 'styled-components';

const Selector = forwardRef(
  ({ isOpen, onToggle, renderMenu, children }, ref) => {
    return (
      <SelectorContainer
        ref={ref}
        onClick={onToggle}
        className={isOpen ? 'isActive' : null}
        aria-label='드랍다운 선택'
      >
        {children}
        {isOpen && <DropdownUl>{renderMenu()}</DropdownUl>}
      </SelectorContainer>
    );
  },
);

export default Selector;

// 커스텀 셀렉터
export const SelectorContainer = styled.div`
  position: relative;

  .selectorBtn {
    padding: 8px 12px;
    border-radius: 8px;
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.fz14};
    line-height: ${({ theme }) => theme.lineHeight.lh18};
    gap: 4px;
    align-items: center;
    font-weight: 500;

    border: 1px solid ${({ theme }) => theme.color.gray40};
    background-color: ${({ theme }) => theme.color.gray10};
    color: ${({ theme }) => theme.color.gray40};

    &.isActive {
      border-color: ${({ theme }) => theme.color.gray60};
      color: ${({ theme }) => theme.color.gray60};
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }

  .show {
    display: none;
  }
`;

export const DropdownUl = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 8px;
  box-shadow: var(--shadow-1);
  width: 100%;
  margin-top: 4px;

  & li {
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.fz14};
    line-height: ${({ theme }) => theme.lineHeight.lh18};
    padding: 6px 16px;
    color: ${({ theme }) => theme.color.gray50};
    border: 1px solid ${({ theme }) => theme.color.gray30};
    border-top: none;
    border-bottom: none;
    background-color: ${({ theme }) => theme.color.gray10};

    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.color.gray30};
      border-radius: 8px 8px 0 0;
    }

    &:last-child {
      border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
      border-radius: 0 0 8px 8px;
    }

    &.selected {
      color: ${({ theme }) => theme.color.blue50};
    }
  }
`;
