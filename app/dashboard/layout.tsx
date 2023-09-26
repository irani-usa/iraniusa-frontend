import Header from "@/components/Dashboard/Layout/Header";
import SideMenu from "@/components/Dashboard/Layout/SideMenu";
import Unsupportable from "@/components/Dashboard/Layout/unsupportable";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Unsupportable />
      <main className="hidden lg:flex w-full">
        <SideMenu />
        <section className="flex flex-col w-4/5 h-screen">
          <Header />
          <main>{children}</main>
        </section>
      </main>
    </>
  );
}
