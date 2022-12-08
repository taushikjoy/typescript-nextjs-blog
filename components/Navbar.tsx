import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImage from '../public/logo.png';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className='mt-4 flex items-center justify-between'>
      <Link href='/'>
        <div className='flex items-center cursor-pointer'>
          <Image src={logoImage} alt='' height={30} width={35} />
          <span className='font-bold ml-2 text-primary'>Taushik's Blog</span>
        </div>
      </Link>
      <ul>
        <li className='mr-6 font-medium text-gray-600'>
          <a href='#'>Products</a>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
          <a href='#'>Products</a>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
          <a href='#'>Products</a>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
          <a href='#'>Products</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
