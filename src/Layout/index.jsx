import { Footer } from '../components/Footer/Footer';

import Navigation from '../components/Navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
