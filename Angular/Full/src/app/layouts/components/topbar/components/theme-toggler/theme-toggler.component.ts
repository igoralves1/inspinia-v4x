import {Component} from '@angular/core';
import {LayoutStoreService} from '@core/services/layout-store.service';
import {LucideAngularModule, Moon, Sun} from 'lucide-angular';

@Component({
  selector: 'app-theme-toggler',
  imports: [LucideAngularModule],
  templateUrl: './theme-toggler.component.html'
})
export class ThemeTogglerComponent {

  constructor(public layout: LayoutStoreService) {
  }

  readonly Moon = Moon;
  readonly Sun = Sun;

  toggleTheme() {
    if (this.layout.theme === 'light') {
      this.layout.setTheme('dark')
    } else {
      this.layout.setTheme('light')
    }
  }
}
