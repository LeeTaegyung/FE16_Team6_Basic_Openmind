import styled from 'styled-components';
/*
   variant를 사용하기 위한 객체.
   근데 다른 페이지도 다 수정해야 해서 동작 확인만 하고 주석처리
  */
// const ButtonVariant = {
//   brown10: css`
//     color: ${({ theme }) => theme.color.brown40};
//     background-color: ${({ theme }) => theme.color.brown10};

//     &:hover {
//       outline: 2px solid ${({ theme }) => theme.color.brown40};
//     }

//     &:active {
//       outline: 2px solid ${({ theme }) => theme.color.brown40};
//       background-color: ${({ theme }) => theme.color.brown20};
//     }

//     &:disabled {
//       border-color: ${({ theme }) => theme.color.brown30};
//       background-color: ${({ theme }) => theme.color.brown10};
//       color: ${({ theme }) => theme.color.brown30};
//     }
//   `,

//   brown40: css`
//     color: ${({ theme }) => theme.color.gray10};
//     background-color: ${({ theme }) => theme.color.brown40};

//     &:hover {

//       border-color: transparent;
//       outline: 2px solid ${({ theme }) => theme.color.brown50};
//     }

//     &:active {
//       border-color: transparent;
//       outline: 2px solid ${({ theme }) => theme.color.brown50};
//       background-color: ${({ theme }) => theme.color.brown50};
//     }

//     &:disabled {
//       border-color: ${({ theme }) => theme.color.brown30};
//       background-color: ${({ theme }) => theme.color.brown30};
//       outline: none;
//       color: ${({ theme }) => theme.color.gray10};
//     }
//   `,
// };

// 기본 ButtonBrown 최하단에 다음 줄 추가
// ${({ $variant }) => $variant && ButtonVariant[$variant]}

export const ButtonBrown = styled.button`
  border-radius: 8px;
  padding: 12px 24px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
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
