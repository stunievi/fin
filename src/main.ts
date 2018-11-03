import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//import { AppModuleNgFactory } from './app/app.module.ngfactory';
// 手势
// import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).catch(err => console.log(err));
