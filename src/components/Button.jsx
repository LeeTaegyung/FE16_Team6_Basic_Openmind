import styled from 'styled-components';

export const ButtonBrown10 = styled.button`
  border-radius: 8px;
  border: 1px ${({ theme }) => theme.color.brown40} solid;
  padding: 12px 24px;
  color: ${({ theme }) => theme.color.brown40};
  background-color: ${({ theme }) => theme.color.brown10};
  font-size: ${({ theme }) => theme.fontSize.fz16};
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    border-color: transparent;
    outline: 2px solid ${({ theme }) => theme.color.brown40};
  }

  &:active {
    border-color: transparent;
    outline: 2px solid ${({ theme }) => theme.color.brown40};
    background-color: ${({ theme }) => theme.color.brown20};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.color.brown30};
    background-color: ${({ theme }) => theme.color.brown10};
    color: ${({ theme }) => theme.color.brown30};
    outline: none;
    cursor: default;
  }

  border-radius: ${(props) => (props.$round ? '200px' : '8px')};
  box-shadow: ${(props) =>
    props.$shadow ? props.theme.boxShadow.shadow3 : 'none'};
`;

export const ButtonBrown40 = styled(ButtonBrown10)`
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

  /* disable가 prop으로 있을 경우 */
  &:disabled {
    border-color: ${({ theme }) => theme.color.brown30};
    background-color: ${({ theme }) => theme.color.brown30};
    outline: none;
    color: ${({ theme }) => theme.color.gray10};
  }
`;
