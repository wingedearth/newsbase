import { metadata } from '@/app/layout';
import Link from 'next/link';

export const NavTitle = () => (
  <Link href="/" className="text-2xl font-bold text-white">
    {metadata.title}
  </Link>
);
