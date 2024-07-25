import { generateYAxis, localeOfMonth } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
//import { Revenue } from '@/app/lib/definitions';
import { fetchRevenue } from '@/app/lib/data/insights';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {

  const rawRevenue = await fetchRevenue(2024);

  //console.log(rawRevenue);

  const revenue = rawRevenue.map((item, index) => {
    return {
        month: `${localeOfMonth(index+1, "vi-VN")}`,
        revenue: item.revenue
    };
  });

  /*console.log(revenue);
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
  // NOTE: comment in this code when you get to this point in the course

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>

      <div className="rounded-xl bg-gray-50 p-4 grid grid-cols-12 w:full">
        <div
        className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex col-span-1"
        style={{ height: `${chartHeight}px` }}
        >
        {yAxisLabels.map((label) => (
            <p key={label}>{label}</p>
        ))}
        </div>
        
        <div className="sm:grid-cols-12 mt-0 grid grid-cols-12 md:grid-cols-12 items-end gap-2 rounded-md bg-white p-2 md:gap-4 md:col-span-11 col-span-12">

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
            </div>
        </div>
        <div className="flex items-center pb-2 pt-6">
            <CalendarIcon className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
    </div>
  );
}
