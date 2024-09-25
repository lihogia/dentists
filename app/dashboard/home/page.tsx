import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { CardsSkeleton, RevenueChartSkeleton, LatestInvoicesSkeleton } from '@/app/ui/skeletons';
import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import { useTranslations } from 'next-intl';
import InsightsPage from '@/app/ui/dashboard/insights';

export default function Page() {
    const trans = useTranslations('Home');
    

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl md:mt-2`}>
                {trans("dashboard")}
            </h1>
            <InsightsPage />
        </main>
    );
}