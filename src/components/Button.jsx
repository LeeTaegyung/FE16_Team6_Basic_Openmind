import styled from 'styled-components';

export const ButtonBrown = styled.button`
  border-radius: 8px;
  padding: 12px 24px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSize.fz16};
  border: 1px solid ${({ theme }) => theme.color.brown40};

  &:hover {
    border-color: transparent;
    outline: 2px solid ${({ theme }) => theme.color.gray50};
  }

  &:active {
    border-color: transparent;
  }

  &:disabled {
    outline: none;
    cursor: default;
  }

  border-radius: ${(props) => (props.$round ? '200px' : '8px')};
  box-shadow: ${(props) =>
    props.$shadow ? props.theme.boxShadow.shadow3 : 'none'};
`;

export const ButtonBrown10 = styled(ButtonBrown)`
  color: ${({ theme }) => theme.color.brown40};
  background-color: ${({ theme }) => theme.color.brown10};

  &:hover {
    outline: 2px solid ${({ theme }) => theme.color.brown40};
  }

  &:active {
    outline: 2px solid ${({ theme }) => theme.color.brown40};
    background-color: ${({ theme }) => theme.color.brown20};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.color.brown30};
    background-color: ${({ theme }) => theme.color.brown10};
    color: ${({ theme }) => theme.color.brown30};
  }
`;

export const ButtonBrown40 = styled(ButtonBrown)`
  color: ${({ theme }) => theme.color.gray10};
  background-color: ${({ theme }) => theme.color.brown40};

  &:hover {
    border-color: transparent;
    outline: 2px solid ${({ theme }) => theme.color.brown50};
  }

  &:active {
    border-color: transparent;
    outline: 2px solid ${({ theme }) => theme.color.brown50};
    background-color: ${({ theme }) => theme.color.brown50};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.color.brown30};
    background-color: ${({ theme }) => theme.color.brown30};
    outline: none;
    color: ${({ theme }) => theme.color.gray10};
  }
`;
