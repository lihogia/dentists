import { clsx } from 'clsx';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

type HeroIcons = typeof InformationCircleIcon;

interface Tab {
  label: string;
  icon: HeroIcons;
  href: string;
  active?: boolean;
}

export default function Tabs({
  tabs,
}: {
  tabs: Tab[];
}) {
  const trans = useTranslations('Patients');

  return (
    <nav aria-label="Tab" className=" block p-0 bg-blue-100 m-0 rounded-t">
      <ol className='flex text-md'>
        {tabs.map((tab, index) => {
          const LinkIcon = tab.icon;
          return (
          <li
            key={tab.href}
            aria-current={tab.active}
            className={clsx(
              tab.active ? 'text-white bg-blue-600 rounded-tl' : 'text-gray-500','px-3 py-2 hover:bg-blue-400 hover:text-white hover:rounded-tl'
            )}
          >

            <Link href={tab.href}>
              <p className="md:hidden md:block"><LinkIcon className="w-6"/></p>
              <p className="hidden md:block">{trans(tab.label)}</p>
            </Link>
          </li>
        )})}
      </ol>
    </nav>
  );
}
