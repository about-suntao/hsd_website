import Header from "@/components/layout/headerEn/page"
import Footer from "@/components/layout/footerEn/page"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}
