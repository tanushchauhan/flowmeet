import StremProvider from "@/providers/StremProvider";

function Layout({ children }) {
  return (
    <main>
      <StremProvider>{children}</StremProvider>
    </main>
  );
}

export default Layout;
