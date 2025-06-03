import ArrowRight from '@assets/icons/ArrowRight.svg?react';
import { ButtonBrown10 } from '@components/Button';
import Logo from '@components/Logo';
import styled from 'styled-components';

function ListHeader() {
  return (
    <Header>
      <Logo className='logo' />
      <Button>
        답변하러 가기
        <ArrowRight aria-label='화살표 아이콘' />
      </Button>
    </Header>
  );
}

export default ListHeader;

const Header = styled.header`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px 0;

  .logo {
    width: 146px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 50px 0;
  }
`;

// 답변하러가기 버튼
export const Button = styled(ButtonBrown10)`
  padding: 8px 12px;
  color: ${({ theme }) => theme.color.brown40};
  font-size: ${({ theme }) => theme.fontSize.fz14};
  line-height: ${({ theme }) => theme.lineHeight.lh18};

  svg {
    width: 18px;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 24px;
    font-size: ${({ theme }) => theme.fontSize.fz16};
    line-height: ${({ theme }) => theme.lineHeight.lh22};
  }
`;
