import LogoImg from '@assets/images/Logo.svg?react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Logo({ className }) {
  return (
    <LogoWrap className={className} to='/'>
      <LogoImg />
    </LogoWrap>
  );
}

export default Logo;

const LogoWrap = styled(Link)`
  display: inline-block;

  svg {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;
