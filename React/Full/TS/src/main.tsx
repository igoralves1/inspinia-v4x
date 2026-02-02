import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import AppWrapper from '@/components/AppWrapper.tsx'

import 'animate.css/animate.min.css'    
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'
import 'flatpickr/dist/flatpickr.min.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'ladda/dist/ladda.min.css'
import 'leaflet/dist/leaflet.css'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import 'react-datepicker/dist/react-datepicker.min.css'
import 'react-day-picker/style.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-photo-album/rows.css'
import 'react-quill-new/dist/quill.bubble.css'
import 'react-quill-new/dist/quill.core.css'
import 'react-quill-new/dist/quill.snow.css'
import 'simplebar-react/dist/simplebar.min.css'
import 'spinkit/spinkit.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'yet-another-react-lightbox/styles.css'

import '@/assets/scss/app.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppWrapper>
        <App />
      </AppWrapper>
    </BrowserRouter>
  </StrictMode>,
)
