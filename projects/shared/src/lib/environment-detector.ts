import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentDetectorService {
  constructor(@Inject('ENV_CONFIG') private env: any) {}

  getAppBase(): string {
    return this.env.productBasePath;
  }

  isHost(): boolean {
    return this.env.isHost === true;
  }

  isRemote(): boolean {
    return this.env.isHost == false;
  }
}
