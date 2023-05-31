import { Footer } from '../components/Footer/Footer';
import HeaderSocial from '../components/Navigation/Header-Social';

import Navigation from '../components/Navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderSocial />
      <Navigation />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
