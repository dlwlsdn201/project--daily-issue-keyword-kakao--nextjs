'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationList } from '@shared/config/Navigation';

export const Navigation = ({}): React.ReactElement => {
  const currentPath = usePathname();

  const currentArrow = (targetPath: string) =>
    targetPath === currentPath ? '⇦' : '';

  const navigationItems = NavigationList.map((item) => (
    <li
      className="flex gap-2 border px-2 border-red-500 rounded-sm"
      key={item.path}
    >
      <Link href={item.path}>{item.label}</Link>
      {currentArrow(item.path)}
    </li>
  ));

  return (
    <nav>
      <ul className="list-none no-underline flex gap-2 border-2">
        {...navigationItems}
      </ul>
    </nav>
  );
};
