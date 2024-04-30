import { InProgress } from '@/components';
import {
  Contact,
  Header,
  Navbar,
  Showcases,
  Thumbnail,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Pham Yen Nhi Portfolio',
};

export default function Work() {
  return (
    <Transition>
      <div className='bg-gray-400 h-28'>
        <Navbar />
      </div>
      <h1 className='mt-6 text-[64px] ml-36 bg-gradient-to-r from-[#6607F4] via-[#4B1196] to-[#4B1196] text-transparent bg-clip-text'>
        My Academic
      </h1>
      <h1 className='mt-6 text-[64px] ml-36 bg-gradient-to-r from-[#6607F4] via-[#4B1196] to-[#4B1196] text-transparent bg-clip-text'>
        & Freelance Works
      </h1>
      <br />
      <main>
        <Showcases />
      </main>
      <Contact />
    </Transition>
  );
}
