import Header from "@/components/Dashboard/Layout/Header"
import SideMenu from "@/components/Dashboard/Layout/SideMenu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex w-full">
      <SideMenu />
      <section className="flex flex-col w-4/5 h-screen">
        <Header />
        <main>
          {children}
        </main>
      </section>
    </main>
  )
}