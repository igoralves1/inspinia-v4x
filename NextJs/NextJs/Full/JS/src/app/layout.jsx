import AppWrapper from '@/components/AppWrapper';
import favicon from '@/assets/images/favicon.ico';
import { appDescription, appTitle } from '@/helpers';
import 'animate.css/animate.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'jsvectormap/dist/css/jsvectormap.min.css';
import 'ladda/dist/ladda.min.css';
import 'leaflet/dist/leaflet.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-datepicker/dist/react-datepicker.min.css';
import 'react-day-picker/style.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-photo-album/rows.css';
import 'react-quill-new/dist/quill.bubble.css';
import 'react-quill-new/dist/quill.core.css';
import 'react-quill-new/dist/quill.snow.css';
import 'simplebar-react/dist/simplebar.min.css';
import 'spinkit/spinkit.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'yet-another-react-lightbox/styles.css';
import '@/assets/scss/app.scss';
import { Open_Sans, Roboto } from 'next/font/google';
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans'
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-roboto'
});
export const metadata = {
  title: {
    default: appTitle,
    template: '%s | ' + appTitle
  },
  description: appDescription,
  icons: [favicon.src]
};
const RootLayout = ({
  children
}) => {
  return <html lang="en" className={`${roboto.variable} ${openSans.variable}`}>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>;
};
export default RootLayout;