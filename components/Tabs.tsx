import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { ICategory } from '../types';

interface IPropType {
  categories: ICategory[];
}

const Tabs = ({ categories }: IPropType) => {
  const router = useRouter();
  return (
    <div className='my-8 flex items-center justify-between border-b-2 border-gray-100'>
      <ul className='flex items-center'>
        <li
          className={`mr-6 pb-4 border-b-4 rounded-sm ${
            router.pathname === '/'
              ? 'border-primary text-primary'
              : 'border-white'
          }`}
        >
          <Link href='#'> Recent</Link>
        </li>
        {categories.map((category) => {
          return (
            <li className='mr-6 pb-4 border-b-4 rounded-sm'>
              <Link href='#'>{category.attributes.Title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
