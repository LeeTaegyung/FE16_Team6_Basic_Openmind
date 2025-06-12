import { useEffect, useState } from 'react';

import LogoSvg from '@assets/images/Logo.svg?react';
import styled, { keyframes } from 'styled-components';

function Splash() {
  // 홈에서 초기에 한번만 보이게
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsShow(false);
    }, 2500);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    isShow && (
      <StyledIntro>
        <LogoSvg />
      </StyledIntro>
    )
  );
}

export default Splash;

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const fadeOut = keyframes`
  to { display:none; opacity: 0; visibility: hidden; }
`;

const StyledIntro = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeOut} 1s ease-out 1.5s forwards;

  svg {
    margin-top: -100px;
    width: 160px;
    animation: ${fadeInScale} 0.8s ease-out;
  }
`;
