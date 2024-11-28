import { Header, Footer } from "@/components/organisms";

const Layout = ({ children }: any) => {
  return (
    <main>
      <Header />
        {children}
      <Footer />
    </main>
  );
};

export default Layout;
