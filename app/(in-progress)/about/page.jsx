import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'I am a passionate and creative 4th year interior design student. With a strong eye for detail and a keen understanding of space planning, I am driven to transform functional spaces into beautiful and inspiring environments. © Pham Yen Nhi Portfolio',
};

export default function About() {
  return (
    <Transition>
      <InProgress>About Page</InProgress>
    </Transition>
  );
}
