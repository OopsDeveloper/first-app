import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {Greeting} from "./app/greeting";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const g = new Greeting();
g.sayHello('angular');
