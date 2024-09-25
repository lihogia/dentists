import { auth, signOut } from "@/auth";
import UserLogo from "@/app/ui/userLogo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SettingsPage = async () => {
    const session = await auth();

    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
            { <UserLogo />}
            </div>

            <div>
                {session?.user.role == "ADMIN" && <div className="mt-5 mb-5 bg-blue-900 text-white p-5">
                    {JSON.stringify(JSON.parse(JSON.stringify(session)), null, 4)}
                </div>}
                <form action={async () => {
                    "use server";    
                    await signOut({redirect: true, redirectTo: "/"});
                }}>
                <Link className="mt-5 mb-5"
                    href="/api/auth/providers">
                    See Providers</Link>
                <br/>
                <Button
                    type="submit"
                    className="w-20 mt-5"
                    variant="default"
                >
                    Sign out
                    </Button>
                </form>
            </div>
        </main>
    );
}

export default SettingsPage;