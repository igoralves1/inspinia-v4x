import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {initQuillIcons} from '@/app/utils/quill-icons-init';

initQuillIcons()

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
