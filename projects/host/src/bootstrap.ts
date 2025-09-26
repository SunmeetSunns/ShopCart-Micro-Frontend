import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

bootstrapApplication(App, {
  ...appConfig,
  providers: [...(appConfig.providers || []), { provide: 'ENV_CONFIG', useValue: environment }],
});
