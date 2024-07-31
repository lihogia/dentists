import { CubeIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/src/app/ui/fonts';

export default function UserLogo() {
    return (
        <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
            <CubeIcon className="h-6 w-6 md:h-12 md:w-12 m-[3px]" />
            <p className="md:text-[30px] text-[20px]">Phong Nha 120A</p>
        </div>
    );
}
