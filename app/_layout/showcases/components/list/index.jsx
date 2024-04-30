'use client';

import Link from 'next/link';

import { showcaseOptions } from '@/data';

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const items = showcaseOptions.map(
    ({ href, title, image, thumbnail }, index) => {
      const id = index;
      return (
        <li
          key={`thumbnail-list-${id}`}
          className='border-t border-solid transition-all last-of-type:border-b group-hover:opacity-90'
          style={{
            paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
            paddingBlock: 'clamp(1em,3vw,4em)',
          }}
          onPointerEnter={({ clientX, clientY }) => {
            handlePointerEnter(id);
            moveItems(clientX, clientY);
          }}
          onPointerLeave={({ clientX, clientY }) => {
            handlePointerLeave(id);
            moveItems(clientX, clientY);
          }}
        >
          <Link
            href={href}
            className='flex items-center max-lg:flex-wrap gap-8'
            passHref
          >
            <img
              src={thumbnail}
              alt={title}
              className='w-32 h-auto max-lg:w-full'
            />
            <h4
              className='text-[#5E17EB]'
              style={{
                fontSize: 'calc(clamp(3.25em, 7vw, 8em) * 0.25)',
              }}
            >
              {title}
            </h4>
            <p className='text-lg ml-auto font-medium text-[#E47530]'>
              Interior Design
            </p>
          </Link>
        </li>
      );
    },
  );

  return <ul className='group'>{items}</ul>;
}
