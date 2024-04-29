import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Pham Yen Nhi Portfolio',
};

export default function Work() {
  return (
    <Transition>
      <InProgress>Work Page</InProgress>
    </Transition>
  );
}
