import { revalidatePath } from 'next/cache';
import { redirect, RedirectType, permanentRedirect } from 'next/navigation';


export default function Page() {
    const url = `/dashboard/patients`;
    revalidatePath(url);
    redirect(url);
}