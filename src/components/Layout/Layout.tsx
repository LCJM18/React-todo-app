interface LayoutProps {
  children?: JSX.Element;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="w-screen h-screen top-0 left-0 bg-primary-black flex items-center justify-center max-w-screen">
      {children}
    </main>
  );
};

export default Layout;
