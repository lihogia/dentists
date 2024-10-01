import Image from "next/image";
import Link from "next/link";
import UserLogo from "@/app/ui/userLogo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
            { <UserLogo />}
            </div>
  
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    {children}
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
    )
}

export default AuthLayout;