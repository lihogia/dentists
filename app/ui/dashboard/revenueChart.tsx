import { generateYAxis, localeOfMonth } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
//import { Revenue } from '@/app/lib/definitions';
import { fetchRevenue } from '@/app/lib/data/insightsPrisma';
import { useTranslations } from 'next-intl';
import { getLocale } from 'next-intl/server';


// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  const trans = useTranslations('Home');
  const locale = await getLocale();

  const today = new Date();

  const rawRevenue = await fetchRevenue(today.getFullYear());

  //console.log(`useLocale: ${locale}`);

  const revenue = rawRevenue.map((item, index) => {
    return {
        month: `${localeOfMonth(index+1, locale)}`,
        revenue: item.revenue
    };
  });

  //console.log(locale);
  /*
  const revenue2 = 
  [
    { month: 'Jan', revenue: 200000 },
    { month: 'Feb', revenue: 180000 },
    { month: 'Mar', revenue: 220000 },
    { month: 'Apr', revenue: 250000 },
    { month: 'May', revenue: 230000 },
    { month: 'Jun', revenue: 320000 },
    { month: 'Jul', revenue: 350000 },
    { month: 'Aug', revenue: 370000 },
    { month: 'Sep', revenue: 250000 },
    { month: 'Oct', revenue: 280000 },
    { month: 'Nov', revenue: 300000 },
    { month: 'Dec', revenue: 98000 },
  ];
  */
  
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        {trans("revenue.recentrevenue")}
      </h2>

      <div className="rounded-xl bg-gray-50 p-4 grid grid-cols-12 w:full">
        <div
        className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex col-span-1"
        style={{ height: `${chartHeight}px` }}
        >
        {yAxisLabels.map((label) => (
            <p key={`${label}`}>{label}</p>
        ))}
        </div>
        
        <div className="sm:grid-cols-12 mt-0 grid grid-cols-12 md:grid-cols-12 items-end gap-2 rounded-md bg-white p-2 md:gap-4 md:col-span-11 col-span-12">

          {revenue.map((item) => (
            <div key={`${item.month}`} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * item.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {item.month}
              </p>
            </div>
          ))}
            </div>
        </div>
        <div className="flex items-center pb-2 pt-6">
            <CalendarIcon className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-500 ">{trans("revenue.in12months")}</h3>
        </div>
    </div>
  );
}
