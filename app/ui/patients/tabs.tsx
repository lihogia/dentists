import { clsx } from 'clsx';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface Tab {
  label: string;
  short: string;
  href: string;
  active?: boolean;
}

export default function Tabs({
  tabs,
}: {
  tabs: Tab[];
}) {
  return (
    <nav aria-label="Tab" className=" block p-0 bg-blue-100 m-0 rounded-t">
      <ol className={clsx(lusitana.className, 'flex text-lg')}>
        {tabs.map((tab, index) => {
          //const LinkIcon = tab.icon;
          return (
          <li
            key={tab.href}
            aria-current={tab.active}
            className={clsx(
              tab.active ? 'text-white bg-blue-600 rounded-tl' : 'text-gray-500','px-3 py-2'
            )}
          >

            <Link href={tab.href}>
              <p className="md:hidden md:block">{tab.active ? tab.label : `${tab.short}...`}</p>
              <p className="hidden md:block">{tab.label}</p>
            </Link>
            { /*index < tabs.length - 1 ? (
              <span className="mx-3 inline-block"></span>
            ) : null */}
          </li>
        )})}
      </ol>
    </nav>
  );
}
