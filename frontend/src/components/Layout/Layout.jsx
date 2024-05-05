import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="font-mono">{children}</div>
    </>
  );
};

export default Layout;
