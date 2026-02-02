import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { DecimalPipe } from '@angular/common'
import {provideDaterangepickerLocale} from 'ngx-daterangepicker-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
      DecimalPipe,
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideAnimations(),
      provideDaterangepickerLocale({
          separator: ' - ',
          cancelLabel: 'Cancel',
      })
  ],
};
