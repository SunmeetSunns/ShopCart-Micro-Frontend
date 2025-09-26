// projects/shared/src/lib/environment-detector.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EnvironmentDetectorService {
  constructor() {}

  isRemote(): boolean {
    // If window.IS_REMOTE is set by your host/remote config
    return !!(window as any).IS_REMOTE;
  }

  isHost(): boolean {
    return !this.isRemote();
  }
}
