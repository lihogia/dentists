import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function Status({ text, status }: { text: string, status: boolean }) {
  return (
    <span
      className={clsx(status ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500',
        'inline-flex items-center rounded-full px-2 py-1 text-xs')}>
      {!status ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status ? (
        <>
          { text }
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
