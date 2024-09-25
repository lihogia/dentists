import { Suspense } from 'react';
import { auth } from "@/auth";
import RevenueChart from '@/app/ui/dashboard/revenueChart';
import LatestInvoices from '@/app/ui/dashboard/latestInvoices';
import { CardsSkeleton, RevenueChartSkeleton, LatestInvoicesSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import { useTranslations } from 'next-intl';


export default async function InsightsPage() {

    const session = await auth();
    const isAdmin = session?.user.role == "ADMIN";
    

    return (
        <div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            {isAdmin && <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
            }
        </div>
    );
}