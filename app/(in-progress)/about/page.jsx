import { Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'I am a passionate and creative 4th year interior design student. With a strong eye for detail and a keen understanding of space planning, I am driven to transform functional spaces into beautiful and inspiring environments. © Pham Yen Nhi Portfolio',
};

export default function About() {
  return (
    <Transition>
      <div className='bg-black h-28'>
        <Navbar />
      </div>
      <div>
        <img
          className='w-full h-full'
          src='https://i.postimg.cc/9QhCv0t1/CVpyn.png'
          alt='CV'
        />
      </div>
    </Transition>
  );
}
