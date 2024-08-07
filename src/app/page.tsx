import Image from "next/image";
import Link from "next/link";
import UserLogo from "@/src/app/ui/userLogo";
import { lusitana } from '@/src/app/ui/fonts';
import { useTranslations } from 'next-intl';

export default function Home() {
  const trans = useTranslations('Home');

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        { <UserLogo />}
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/>
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            {trans.rich("welcome", {
              strong: (text) => <strong>{text}</strong>
            })}            
          </p>
          <Link
            href="/dashboard/home"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>{trans("login")}</span> 
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src='/hero-desktop.png'
            width={1000}
            height={760}
            className='hidden md:block'
            alt='Screenshots of the dashboard project showing desktop version'
            />
            <Image 
              src='/hero-mobile.png'
              width={560}
              height={620}
              className='block md:hidden'
              alt='Screenshots of the dashboard project showing mobile version'
              />
        </div>
      </div>
    </main>
  );
}