import Header from "@/components/layout/headerZh/page"
import Footer from "@/components/layout/footerZh/page"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}
