import SideNav from '@/app/ui/sideNav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow pt-2 pl-4 pr-4 md:overflow-y-auto md:p-2 md:pl-3">{children}</div>
    </div>
  );
}