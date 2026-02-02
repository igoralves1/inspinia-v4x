import Customizer from '@/layouts/components/customizer';
import Footer from '@/layouts/components/footer';
import Topbar from '@/layouts/components/topbar';
import { lazy } from 'react';
import { Fragment } from 'react';
const ResponsiveNavbar = lazy(() => import('@/layouts/components/responsive-navbar'));
const HorizontalLayout = ({
  children
}) => {
  return <Fragment>
      <div className="wrapper">
        <Topbar />

        <ResponsiveNavbar />

        <div className="content-page">
          {children}

          <Footer />
        </div>
      </div>

      <Customizer />
    </Fragment>;
};
export default HorizontalLayout;