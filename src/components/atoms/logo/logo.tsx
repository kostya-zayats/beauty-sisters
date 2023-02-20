import Image from 'next/image';

export const Logo = () => {
  return (
    <a className={'logo'} href='#'>
      <img src='/img/logo.png' alt='logo' />
    </a>
  );
};
