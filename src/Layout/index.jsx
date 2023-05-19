import Navbarr from '../components/Navbar/Navbar';
import Navigation from '../components/Navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
