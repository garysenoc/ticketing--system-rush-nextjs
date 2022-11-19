import React from 'react';
import Image from 'next/image';
import Logo from 'public/ustlogoedited.png';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { RiFileListLine, RiGroupFill, RiLogoutBoxRLine } from 'react-icons/ri';
import UnstyledButton from 'components/UI/Buttons/UnstyledButton';
import Link from 'next/link';
import Button from 'components/UI/Buttons/Button';

const Mainlayout = ({ children, href = '', className = '', show = true }) => {
  return (
    <div
      className='relative min-h-screen flex flex-col'
      style={{ backgroundImage: 'url(bg.jpg)' }}
    >
      <nav className='sticky top-0 h-24 py-2.5 px-6 bg-secondary-500 flex items-center z-20'>
        <Image
          src={Logo}
          alt='UST Logo'
        />
      </nav>
      <main className='relative p-4 h-full grow flex items-center justify-center'>
        {!show && (
          <Link href={href}>
            <UnstyledButton className='absolute top-6 left-6'>
              <HiOutlineArrowLeft
                className='w-10 h-10'
                color='rgb(234,198,69)'
              />
            </UnstyledButton>
          </Link>
        )}
        {show && (
          <div className='fixed left-0 top-24 bottom-0 w-18 z-10 bg-tertiary-500 py-6 px-4 flex flex-col gap-6'>
            <UnstyledButton className='flex items-center justify-center  cursor-pointer'>
              <RiFileListLine className='w-8 h-8' />
            </UnstyledButton>
            <UnstyledButton className='flex items-center justify-center bg-tertiary-500'>
              <RiGroupFill className='w-8 h-8' />
            </UnstyledButton>
            <UnstyledButton className='flex items-center justify-center bg-tertiary-500  mt-auto'>
              <RiLogoutBoxRLine className='w-8 h-8' />
            </UnstyledButton>
          </div>
        )}
        <div className={`${className} pl-28 pr-6 bg-background`}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Mainlayout;

