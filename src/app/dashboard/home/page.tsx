import { Suspense } from 'react';
import { lusitana } from '@/src/app/ui/fonts';
import { CardsSkeleton, RevenueChartSkeleton, LatestInvoicesSkeleton } from '@/src/app/ui/skeletons';
import CardWrapper, { Card } from '@/src/app/ui/dashboard/cards';
import RevenueChart from '@/src/app/ui/dashboard/revenueChart';
import LatestInvoices from '@/src/app/ui/dashboard/latestInvoices';
import { useTranslations } from 'next-intl';

export default function Page() {
    const trans = useTranslations('Home');

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl md:mt-2`}>
                {trans("dashboard")}
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/**
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>                
                 */
                }
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}