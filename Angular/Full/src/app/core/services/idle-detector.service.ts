import { Injectable, NgZone } from '@angular/core';
import { Subject, timer, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IdleDetectorService {
  private idleTime = 0;
  private idleLimit = 5;
  private wasIdle = false;
  private activityEvents = ['mousemove', 'keydown', 'scroll', 'click'];
  private idleSub?: Subscription;

  public onIdle = new Subject<void>();
  public onResume = new Subject<void>();

  constructor(private zone: NgZone) {}

  startMonitoring() {
    this.zone.runOutsideAngular(() => {
      this.activityEvents.forEach(event =>
        window.addEventListener(event, this.resetTimer.bind(this))
      );
      this.startTimer();
    });
  }

  private startTimer() {
    this.idleSub = timer(0, 1000).subscribe(() => {
      this.idleTime++;
      if (this.idleTime === this.idleLimit) {
        this.wasIdle = true;
        this.zone.run(() => this.onIdle.next());
      }
    });
  }

  private resetTimer() {
    if (this.wasIdle) {
      this.wasIdle = false;
      this.zone.run(() => this.onResume.next());
    }
    this.idleTime = 0;
  }

  stopMonitoring() {
    this.idleSub?.unsubscribe();
    this.activityEvents.forEach(event =>
      window.removeEventListener(event, this.resetTimer.bind(this))
    );
  }
}
