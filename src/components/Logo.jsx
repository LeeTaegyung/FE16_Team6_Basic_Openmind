import LogoImg from '@assets/images/Logo.svg?react';
import { Link } from 'react-router-dom';

function Logo({ className }) {
  return (
    <Link to='/'>
      <LogoImg className={className} />
    </Link>
  );
}

export default Logo;
